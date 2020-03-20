import React from 'react';
import { Layout, Spin, List, Tag, Button, Modal, Input, message } from 'antd';
import { DeleteOutlined, EditOutlined, UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import BaseComponent from 'components/Base';
import Header from 'components/account/Header';
import { FetchAccountList, UpdateAccount, DeleteAccount } from 'client/account';
import { account } from 'proto/account';
import { common } from 'proto/common';
import store from 'store';
import intl from 'react-intl-universal';

import "./account.less";

const { confirm } = Modal;

interface State {
    loading: boolean;
    accounts: common.IUser[] | undefined;
    username: string;
    id: number;
    visibleEditAccountModal: boolean;
    visibleDeleteAccountModal: boolean;
    isAdmin: boolean;
}

class Account extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        loading: false,
        accounts: [] as common.IUser[],
        username: "",
        id: -1,
        visibleEditAccountModal: false,
        visibleDeleteAccountModal: false,
        isAdmin:  false,
    };
    
    componentDidMount(){
        this.setState({
            isAdmin: store.getState().global.isAdmin
        });
        this.fetchAccounts();
    }

    fetchAccounts = async () => {
        this.setState({loading: true});
        const req = account.FetchAccountRequest.create({});
        const resp = await FetchAccountList(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }

        this.setState({
            accounts: resp.response?.accounts ,
            loading: false,
        });
    }

    editAccount = (username: string, id: number) => {
        this.switchVisibleEditAccountModal(true);
        this.setState({
            username: username,
            id: id
        });
    }

    cancelEditAccount = ()=>{
        this.reset();
    }

    deleteAccountConfirm = (id:number)=>{
        confirm({
            title: intl.formatMessage({id: "deleteAccountConfirm"}),
            icon: <ExclamationCircleOutlined />,
            onOk:()=>{
                this.deleteAccount(id);
            },
            onCancel:()=>{},
            okText: intl.formatMessage({id: "confirm"}),
            cancelText: intl.formatMessage({id: "cancel"}),
        });
    }

    deleteAccount = async(id:number) =>{
        const req = account.DeleteAccountRequest.create({
            id: id
        });
        
        const resp = await DeleteAccount(req);
        if (!this.checkHTTPResult(resp)) {
            return
        }

        this.reset();
        this.fetchAccounts();
    }

    switchVisibleEditAccountModal = (visible: boolean) =>{
        this.setState({
            visibleEditAccountModal: visible
        })
    }

    switchVisibleDeleteAccountModal = (visible: boolean) =>{
        this.setState({
            visibleDeleteAccountModal: visible
        })
    }

    changeUsername = (e: any) => {
        this.setState({
            username: e.target.value
        })
    }
    
    updateAccount = async() => {
        const {id, username} = this.state;
        const req = account.UpdateAccountRequest.create({
            id: id,
            username: username
        });
        const resp = await UpdateAccount(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }
        message.success(intl.formatMessage({id: "updateSuccess"}))
        this.reset();
        this.fetchAccounts();
    }


    reset = () => {
        this.switchVisibleEditAccountModal(false);
        this.switchVisibleDeleteAccountModal(false);
        this.setState({
            username: "",
            id: -1
        })
    }

    render() {
        const {username, visibleEditAccountModal, isAdmin}=this.state;
        return (
            <Layout>
                {isAdmin && 
                <Layout>
                <List
                    header={<Header fetchAccounts={this.fetchAccounts}/>}
                    bordered
                    className="accounts_list"
                    dataSource={this.state.accounts}
                    renderItem={item => (
                        <List.Item className="account-item">
                            <div>
                            {item.role === common.UserRole.ROLE_ADMIN ?
                                <Tag color="#f50">ADMIN</Tag>:
                                <Tag color="#108ee9">USER</Tag>
                            }

                            {item.nickname}
                            </div>

                            <div className="account-options">
                                <Button 
                                    type="primary"
                                    className="option" 
                                    icon={<EditOutlined />} 
                                    shape="circle"
                                    onClick={()=>this.editAccount(item.nickname!, item.id)}

                                />
                                <Button 
                                    danger
                                    ghost
                                    type="default"
                                    className="option" 
                                    icon={<DeleteOutlined />} 
                                    disabled={item.role === common.UserRole.ROLE_ADMIN}
                                    shape="circle"
                                    onClick={()=>this.deleteAccountConfirm(item.id)}
                                />
                            </div>

                        </List.Item>
                    )}
                />
                <Spin 
                    className="spin" 
                    size="large" 
                    spinning={this.state.loading}
                    tip={intl.formatMessage({ id: "loading"})}
                />
                <Modal
                    title={intl.formatMessage({id: "edit_account"})}
                    width={400}
                    visible={visibleEditAccountModal}
                    onOk={this.updateAccount}
                    onCancel={this.cancelEditAccount}
                    cancelText={intl.formatMessage({id: "cancel"})}
                    okText={intl.formatMessage({id: "update"})}
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
                    </div>

                </Modal>
                </Layout>
                }
            </Layout>
        )
    }
}

export default Account;
