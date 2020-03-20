

import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    PieChartOutlined,
    CodepenOutlined,
    SettingOutlined
} from '@ant-design/icons';
import intl from 'react-intl-universal';
import store from 'store';

import './sidebar.less'

const { SubMenu } = Menu;
const { Sider } = Layout;

interface State {
    isAdmin: boolean
}

class Siderbar extends React.Component<{}, State> {
    state: Readonly<State> = {
        isAdmin: false,
    };

    componentDidMount(){
        this.setState({
            isAdmin: store.getState().global.isAdmin
        })
    }

    render() {
        const {isAdmin} = this.state;
        
        return (
            <Sider width={200} className="sidebar">
                <Menu
                    mode="inline"
                    defaultOpenKeys={['management']}
                >
                    <Menu.Item key="index" className="menu-item">
                        <PieChartOutlined />
                        <Link to="/app/dashboard">{intl.formatMessage({ id: "dashboard-menu"})}</Link>
                        </Menu.Item>
                    {isAdmin && 
                    <SubMenu 
                        key="management" 
                        className="sub-menu" 
                        title={
                            <span>
                                <SettingOutlined />
                                <span>{intl.formatMessage({ id: "management-menu"})}</span>
                            </span>
                        }>

                        <Menu.Item key="account_management" className="menu-item">
                            <UserOutlined />
                            <Link to="/app/management/account">{intl.formatMessage({ id: "account-menu"})}</Link>
                        </Menu.Item>
                        <Menu.Item key="model_management" className="menu-item">
                            <CodepenOutlined />
                            <Link to="/app/management/model">{intl.formatMessage({ id: "model-menu"})}</Link>
                        </Menu.Item>
                    </SubMenu>
                    }
                </Menu>
            </Sider>
        )
    }
}

export default Siderbar;