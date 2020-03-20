import React from 'react';
import { Typography } from 'antd';
import LoginForm from 'components/session/LoginForm'
import BaseComponent from 'components/Base';
import { FetchRecord } from 'client/record';
import { record } from 'proto/record';
import intl from 'react-intl-universal';
import Particles from 'react-particles-js';
import { params as particle_params } from './particles';

import './login.less';

const { Title } = Typography;

interface State{
    recordURL: string
    recordCode: string
}

class LoginPage extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        recordURL: "",
        recordCode: ""
    }

    componentDidMount(){
        this.fetchRecord();
    }

    fetchRecord = async () => {
        const req = record.FetchRecordRequest.create({});
        const resp = await FetchRecord(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }
        console.log(resp)

        this.setState({
            recordCode: resp.response?.code || "" ,
            recordURL: resp.response?.url || "",
        });
    }

    render() {
        const {recordCode, recordURL} = this.state;
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <Particles width={"100vh"} height={"100vh"} className='particles' params={particle_params}/>
                <Title className="title" style={{marginBottom: '64px'}}>{intl.get('tweb')}</Title>
                <LoginForm />
                <div className="footer">
                    <a href={recordURL} target="_blank">{recordCode}</a>
                </div>
            </div>
        )
    }
}

export default LoginPage;
