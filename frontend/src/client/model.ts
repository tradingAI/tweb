import { HTTPResult, Method, SendRequest } from 'client/common';
import axios from 'axios';
import { GetSession } from 'client/session';
import SparkMD5 from 'spark-md5';
import { model } from 'proto/model';

const CHUNK_SIZE = 128*1024;

export const UploadModel = async (modelID :string, 
    file: any, 
    successCallback: Function, 
    errCallback: Function, 
    progressCallBack: Function,
    checkRespFunc: Function) => {

    const handleSuccess = successCallback === undefined ? () => {} : successCallback;
    const handleError = errCallback === undefined ? () => {} : errCallback;
    const handleProgress= errCallback === undefined ? () => {} : progressCallBack;
    
    try{
        // upload chunk
        let chunk_list = await partUpload(modelID, file, CHUNK_SIZE, handleProgress);

        // send complete signal
        const req = model.UploadModelCompleteRequest.create({
            chunks: chunk_list as model.ChunkMeta[],
        });

        const resp = await UploadCompleteModel(req, modelID as string);

        if (!checkRespFunc(resp)) {
            return
        }

        handleSuccess();
    } catch(err){
        handleError();
    }
}

async function partUpload(modelID :string,file: any, chunkSize: number, progressCallBack: Function){
    let chunkTotal = Math.ceil(file.size / chunkSize);
    let chunkList  = [] as model.ChunkMeta[];

    let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Token': GetSession()?.token || '',
          accept: 'application/json',
        },
    };
    return new Promise(function(resolve) {
        for (let num=0; num < chunkTotal; num++){
            const nextSize = Math.min((num+1) * chunkSize, file.size);
            let chunkData = file.slice(num * chunkSize, nextSize);

            new Promise(function(resolve2) {
                let fr = new FileReader();
                fr.onloadend = function () {
                    resolve2(fr.result)
                };
    
                fr.readAsArrayBuffer(chunkData)
            }).then(async function(result){
                const chunkMD5 = SparkMD5.ArrayBuffer.hash(result as ArrayBuffer);

                let formData = new FormData();
                formData.append("hash", chunkMD5);
                formData.append("chunk", chunkData);
                formData.append("index", String(num));

                const res = await axios.post(`/models/upload/${modelID}/chunk/`, formData, config);
                if (res.status !== 200) {
                    console.error(res)
                    return
                }

                const meta = model.ChunkMeta.create({
                    md5: chunkMD5,
                    index: String(num),
                })
                chunkList.push(meta);
                progressCallBack(chunkList.length, chunkTotal);
                if (chunkList.length === chunkTotal){
                    resolve();
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }).then(function(){
        return chunkList;
    }).catch(err=>{
        console.log(err)
    })
}

export const CreateModel = async (req: model.CreateModelRequest): Promise< HTTPResult<model.CreateModelResponse> > => {
    return await SendRequest<model.CreateModelResponse>(Method.POST, `/models/upload/`, req);
}

export const UploadCompleteModel = async (req: model.UploadModelCompleteRequest, id: string): Promise< HTTPResult<model.UploadModelCompleteResponse> > => {
    return await SendRequest<model.UploadModelCompleteResponse>(Method.POST, `/models/upload/${id}/completed/`, req);
}

export const FetchModelList = async (req: model.FetchModelRequest): Promise< HTTPResult<model.FetchModelResponse> > => {
    return await SendRequest<model.FetchModelResponse>(Method.GET, `/models/`, req);
}

export const DeleteModel = async (req: model.DeleteModelRequest): Promise< HTTPResult<model.DeleteModelResponse> > => {
    return await SendRequest<model.DeleteModelResponse>(Method.POST, `/models/${req.id}/delete/`);
}

export const DownloadModel = async (req: model.DownloadModelRequest): Promise< HTTPResult<model.DownloadModelResponse> > => {
    return await SendRequest<model.DownloadModelResponse>(Method.POST, `/models/download/${req.id}/`, req);
}