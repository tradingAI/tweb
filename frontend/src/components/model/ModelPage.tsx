import React from 'react';
import { Layout, Upload, message, Modal, Input, Button} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import BaseComponent from 'components/Base';
import { GetSession } from 'client/session';
import store from 'store';
import intl from 'react-intl-universal';

import "./model.less";

const { Dragger } = Upload;
const { TextArea } = Input;

const uploadModelProps = {
    name: 'file',
    action: '/models/upload/',
    headers: {
        'Access-Token': GetSession()?.token || '',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};

interface State {
    isAdmin: boolean;
    visibleUploadModal: boolean;
    inputModelName: string;
    inputModelVersion: string;
    inputModelDescription: string;
}

class ModelPage extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        isAdmin:  false,
        visibleUploadModal: true,
        inputModelName: "",
        inputModelVersion: "",
        inputModelDescription: "",
    };
    
    componentDidMount(){
        this.setState({
            isAdmin: store.getState().global.isAdmin
        })
    }

    switchUploadModal = (visible: boolean)=>{
        this.setState({
            visibleUploadModal: !this.state.visibleUploadModal
        })
    }

    confirmUploadModel= ()=>{
        this.switchUploadModal(false);
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
        })
    }

    render() {
        const {isAdmin, 
            visibleUploadModal, 
            inputModelName, 
            inputModelVersion, 
            inputModelDescription} = this.state;
        return (
            <Layout className="model-page">
                {isAdmin && 
                <Layout >
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
                        </div>
                </Modal>
                
            </Layout>
        )
    }
}

export default ModelPage;
