
import React from 'react';
import { Typography, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import BaseComponent from 'components/Base';
import { session } from 'proto/session';
import { common } from 'proto/common';
import { Logout, GetSession} from 'client/session';
import intl from 'react-intl-universal';
import { URLRoot } from 'common';
import store from 'store';
import { setIsAdmin  } from 'store/global/action';

import "./header.less"

const { Title } = Typography;

interface State {
    username: string
}

class Header extends BaseComponent<{}, State> {
    
    state: Readonly<State> = {
        username: "",
    };

    componentDidMount() {
        this.fetchUserInfo();
    }


    fetchUserInfo = async () => {
        const sess = GetSession();
        this.setState({
            username: sess?.user?.nickname || "",
        });
        if (sess?.user?.role === common.UserRole.ROLE_ADMIN){
            store.dispatch(setIsAdmin(true));
        }
    }

    render() {
        const { username } = this.state
        return (
            <div className="header">
                <div className="header-left">
                    <img src="/static/image/logo.svg" className="logo" alt="" />
                    <Title className="title"level={2}>Tweb</Title>
                </div>

                <div className="header-right">
                    <div className="hello">
                        {intl.formatMessage({ id: "hello" }) + username}
                    </div>
                    <Button
                        type="default"
                        className="logout"
                        onClick={this.logout}
                        icon={<LogoutOutlined />}
                        shape="round"
                    >
                        {intl.formatMessage({ id: "logout" })}
                    </Button>
                </div>
                
            </div>
        )
    }

    logout = async () => {
        const req = session.LogoutRequest.create({})
        const result = await Logout(req);

        if (!this.checkHTTPResult(result)) {
            return
        }

        // reset the page to force to login page
        window.location.href = URLRoot;
    }
}

export default Header;