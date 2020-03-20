import React from 'react';
import { Layout, Upload, message, Modal, Input, Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BaseComponent from 'components/Base';
import { GetSession } from 'client/session';
import store from 'store';
import intl from 'react-intl-universal';

import "./model.less";

const props = {
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


const { confirm } = Modal;

interface State {
    isAdmin: boolean;
}

class ModelPage extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        isAdmin:  false,
    };
    
    componentDidMount(){
        this.setState({
            isAdmin: store.getState().global.isAdmin
        })
    }


    render() {
        const {isAdmin} = this.state;
        return (
            <Layout>
                {isAdmin && 
                <Layout>
                    <Upload {...props}>
                        <Button>
                        <UploadOutlined /> Click to Upload
                        </Button>
                    </Upload>
                </Layout>
                }
            </Layout>
        )
    }
}

export default ModelPage;
