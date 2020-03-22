import React from 'react';
import { Layout, Upload, message, Modal, Input, Button, Progress, List} from 'antd';
import { UploadOutlined, InboxOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import BaseComponent from 'components/Base';
import { UploadModel, CreateModel, FetchModelList, DeleteModel } from 'client/model';
import { model } from 'proto/model';
import store from 'store';
import intl from 'react-intl-universal';

import "./model.less";

const { Dragger } = Upload;
const { TextArea } = Input;
const { confirm } = Modal;

interface State {
    isAdmin: boolean;
    visibleUploadModal: boolean;
    inputModelName: string;
    inputModelVersion: string;
    inputModelDescription: string;
    fileList: any[];
    progress: number;
    modelList: any[];
}

class ModelPage extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        isAdmin:  false,
        visibleUploadModal: false,
        inputModelName: "",
        inputModelVersion: "",
        inputModelDescription: "",
        fileList: [],
        progress: 0.0,
        modelList: [],
    };
    
    componentDidMount(){
        this.setState({
            isAdmin: store.getState().global.isAdmin
        })

        this.fetchModelList();
    }

    fetchModelList = async() => {
        const req = model.FetchModelRequest.create();
        const resp = await FetchModelList(req);
        if (!this.checkHTTPResult(resp)) {
            return
        }

        this.setState({
            modelList: resp.response?.models || []
        })
    }

    deleteModelConfirm = async (id :string)=>{
        confirm({
            title: intl.formatMessage({id: "deleteModelConfirm"}),
            icon: <ExclamationCircleOutlined />,
            onOk:()=>{
                this.deleteModel(id);
            },
            onCancel:()=>{},
            okText: intl.formatMessage({id: "confirm"}),
            cancelText: intl.formatMessage({id: "cancel"}),
        });
    }

    deleteModel = async(id :string) => {
        const req = model.DeleteModelRequest.create({
            id: id,
        });
        const resp = await DeleteModel(req);
        if (!this.checkHTTPResult(resp)) {
            return
        }
        this.reset()
        this.fetchModelList()
    }

    switchUploadModal = (visible: boolean)=>{
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }

    confirmUploadModel= ()=>{
        if (this.state.fileList.length === 0){
            message.error(intl.formatMessage({id: "pleaseAddUploadModel"}))
            return
        }
        this.handleUpload();
    }

    cancelUploadModel =()=>{
        this.switchUploadModal(false);
    }

    inputModelNameOnChange =(e: any)=>{
        this.setState({
            inputModelName: e.target.value
        })
    }

    inputModelVersionOnChange =(e: any)=>{
        this.setState({
            inputModelVersion: e.target.value
        })
    }

    inputModelDescriptionOnChange =(e: any)=>{
        this.setState({
            inputModelDescription: e.target.value
        })
    }

    disableUpload =():boolean=> {
        const {inputModelName, inputModelVersion} = this.state;
        if (inputModelName === "" || inputModelVersion === ""){
            return true;
        }
        return false;
    }

    reset =()=>{
        this.setState({
            visibleUploadModal: false,
            inputModelName: "",
            inputModelVersion: "",
            inputModelDescription: "",
            fileList: [],
            progress: 0,
        })
        this.fetchModelList();
    }

    beforeUpload =(file :any)=>{
        const {fileList} = this.state;

        if (fileList.length === 1){
            message.error(intl.formatMessage({id: "onlyUploadOneFile"}));
            return false;
        }
        
        const isZipOrGZip = file.type === 'application/zip' || file.type === 'application/x-tar' ;
        if (!isZipOrGZip) {
            message.error(intl.formatMessage({id: "unsupportModelFileType"}));
        }
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
            message.error(intl.formatMessage({id: "modelSizeToLarge"}));
        }

        if (!isZipOrGZip || !isLt10M){
            this.setState({
                fileList: []
            });
        }else{
            this.setState({
                fileList: [file]
            });
        }

        return false;
    }

    handleUpload =async ()=>{
        const { fileList } = this.state;
        let modelID = await this.createModel();

        await UploadModel(
            modelID as string,
            fileList[0],
            ()=>{
                message.success(intl.formatMessage({id:"uploadSuccess"}));
                 this.reset();
            },
            ()=>{
                message.error(intl.formatMessage({id:"uploadFailed"}));
                this.reset();
            },
            this.handlePorgressChange,
            this.checkHTTPResult,
        );
    }

    handlePorgressChange= (num: number, totleChunk: number)=>{
        this.setState({
            progress: num/totleChunk*100
        })
    }

    createModel = async() => {
        const {inputModelName, inputModelVersion, inputModelDescription, fileList} = this.state;
        const req = model.CreateModelRequest.create({
            name: inputModelName,
            version: inputModelVersion,
            description: inputModelDescription,
            file_type:  fileList[0].type,
        });

        const resp = await CreateModel(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }

        return resp.response!.id;        
    }

    

    removeFile =(file :any)=> {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
    }

    render() {
        const {isAdmin, 
            visibleUploadModal, 
            inputModelName, 
            inputModelVersion, 
            inputModelDescription,
            fileList,
            progress,
            modelList} = this.state;

        const uploadModelProps = {
            multiple: false,
            fileList: fileList,
            beforeUpload:this.beforeUpload,
            onRemove: this.removeFile,
        };

        return (
            <Layout className="model-page">
                {isAdmin && 
                <Layout >
                    <List
                        header={
                            <div className="header">
                                <Button 
                                    onClick={()=>this.switchUploadModal(true)}
                                    type="primary" 
                                    className="upload_model_btn"
                                    icon={<UploadOutlined />}
                                >
                                    {intl.formatMessage({id: "uploadModel"})}
                                </Button>
                            </div>
                        }
                        bordered
                        className="models_list"
                        dataSource={modelList}
                        renderItem={item => (
                            <List.Item className="model-item">
                                <div className="model-info">
                                    <div className="model-name">
                                        <div className="key">
                                            {intl.formatMessage({id: "modelName"})}
                                        </div>
                                        <div className="value">
                                            {item.name}
                                        </div>
                                        
                                    </div>
                                    <div className="model-version">
                                        <div className="key">
                                            {intl.formatMessage({id: "modelVersion"})}
                                        </div>
                                        <div className="value">
                                            {item.version}
                                        </div>
                                    </div>
                                    <div className="model-author">
                                        <div className="key">
                                            {intl.formatMessage({id: "modelAuthor"})}
                                        </div>
                                        <div className="value">
                                            {item.user.nickname || "Unknown"}
                                        </div>
                                    </div>
                                    <div className="model-description">
                                        <div className="key">
                                            {intl.formatMessage({id: "modelDescription"})}
                                        </div>
                                        <div className="value">
                                            {item.description || intl.formatMessage({id: "empty"})}
                                        </div>
                                    </div>

                                    
                                </div>
                                <div className="model-options">
                                    <Button 
                                        danger
                                        ghost
                                        type="default"
                                        className="option" 
                                        icon={<DeleteOutlined />}
                                        shape="circle"
                                        onClick={()=>this.deleteModelConfirm(item.id)}
                                    />
                                </div>
                            </List.Item>
                        )}
                    />
                </Layout>
                }

                <Modal
                    title={intl.formatMessage({id: "uploadModel"})}
                    visible={visibleUploadModal}
                    onOk={this.confirmUploadModel}
                    onCancel={this.cancelUploadModel}
                    okText={intl.formatMessage({id: "upload"})}
                    cancelText={intl.formatMessage({id: "cancel"})}
                    >
                        <div className="upload_model">
                            <Input 
                                placeholder={intl.formatMessage({id: "inputModelName"})}
                                className="upload_model_input"
                                value={inputModelName}
                                onChange={this.inputModelNameOnChange}
                            />

                            <Input 
                                placeholder={intl.formatMessage({id: "inputModelVersion"})}
                                className="upload_model_input"
                                value={inputModelVersion}
                                onChange={this.inputModelVersionOnChange}
                            />

                            <TextArea
                                placeholder={intl.formatMessage({id: "inputModelDescription"})}
                                className="upload_model_input" 
                                value={inputModelDescription}
                                onChange={this.inputModelDescriptionOnChange}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                            
                            <Dragger 
                                {...uploadModelProps}
                                className="upload_model_dragger"
                                disabled={this.disableUpload()}
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">{intl.formatMessage({id:"uploadModelText"})}</p>
                            </Dragger>

                            <div 
                                className="progress"
                                hidden={progress === 0}
                            >
                            <Progress 
                                percent={progress}
                            />
                            </div>
                        </div>
                </Modal>
                
            </Layout>
        )
    }
}

export default ModelPage;
