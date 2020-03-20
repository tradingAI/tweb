import React from 'react';
import { Layout, Button, Modal, Input, message} from 'antd';
import { UserOutlined, UserAddOutlined } from '@ant-design/icons';
import BaseComponent from 'components/Base';
import { CreateAccount } from 'client/account';
import { account } from 'proto/account';

import intl from 'react-intl-universal';

import "./header.less"


interface State {
    username: string;
    password: string;
    visibleCreateAccountModal: boolean;
}

interface Prop {
    fetchAccounts: Function;
}

class Header extends BaseComponent<Prop, State> {
    state: Readonly<State> = {
        username: "",
        password: "",
        visibleCreateAccountModal: false,

    };

    componentDidMount(){

    }
    
    switchCreateAccountModal= (visible: boolean) => {
        this.setState({
            visibleCreateAccountModal: visible
        })
    }

    createAccount= async ()=>{
        const {username, password} = this.state;
        if (username === "" || password === ""){
            message.error(intl.formatMessage({id: "emptyUsernameOrPassword"}))
            return
        }

        const req = account.CreateAccountRequest.create({
            username: username,
            password: password,
        });
        const resp = await CreateAccount(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }

        message.success(intl.formatMessage({id: "successCreateAccount"}))
        this.reset();
        this.props.fetchAccounts();
    }

    cancalCreateAccount = () => {
        this.reset();
    }

    reset = () =>{
        this.switchCreateAccountModal(false)
        this.setState({
            username: "",
            password: "",
        })
    }

    changeUsername =(e: any)=>{
        this.setState({
            username: e.target.value
        })
    }

    changePassword =(e: any)=>{
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const {visibleCreateAccountModal, username, password} = this.state;
        return (
            <Layout className="account_list_header">
                <Button 
                    type="primary" 
                    icon={<UserAddOutlined />}
                    onClick={()=>this.switchCreateAccountModal(true)}
                >
                    {intl.formatMessage({id: "create_account"})}
                </Button>
                <Modal
                    title={intl.formatMessage({id: "create_account"})}
                    width={400}
                    visible={visibleCreateAccountModal}
                    onOk={this.createAccount}
                    onCancel={this.cancalCreateAccount}
                    cancelText={intl.formatMessage({id: "cancel"})}
                    okText={intl.formatMessage({id: "create"})}
                >   
                    <div className="create_account_form">
                        <Input 
                            size="large" 
                            placeholder={intl.formatMessage({id: "input_username"})} 
                            prefix={<UserOutlined />} 
                            className="input"
                            value={username}
                            onChange={this.changeUsername}
                        /> 
                        <Input.Password 
                            size="large" 
                            placeholder={intl.formatMessage({id: "input_password"})} 
                            className="input"
                            value={password}
                            onChange={this.changePassword}
                        />
                    </div>

                </Modal>
            </Layout>
    )}
}

export default Header;