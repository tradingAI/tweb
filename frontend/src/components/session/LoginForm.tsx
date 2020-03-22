import { Button, Form, Input, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Store } from 'rc-field-form/lib/interface'
import { Login } from 'client/session';
import BaseComponent from 'components/Base';
import { session } from 'proto/session';
import React from 'react';
import intl from 'react-intl-universal';
import { URLRoot } from 'common'

interface LoginFormState {
    loading: boolean;
}

export default class LoginForm extends BaseComponent<{}, LoginFormState> {
    state: Readonly<LoginFormState> = {
        loading: false,
    };

    render() {
        return (
            <Spin spinning={this.state.loading}>
                <Form name="login" onFinish={this.onFinish} style={{width: '400px'}} hideRequiredMark={true}>
                    {/* username */}
                    <Form.Item name="username" rules={[{ required: true, message: intl.get('message.missing.username') }]}>
                        <Input prefix={<UserOutlined />} placeholder={intl.get('username')} />
                    </Form.Item>

                    {/* password */}
                    <Form.Item name="password" rules={[{ required: true, message: intl.get('message.missing.password') }]}>
                        <Input.Password prefix={<LockOutlined />} placeholder={intl.get('password')} />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                        {intl.get('login')}
                    </Button>
                </Form>
            </Spin>
        )
    }

    onFinish = (values: Store) => {
        const req = session.LoginRequest.create({
            username: values.username,
            password: values.password,
        });
        this.login(req);
    }

    login = async (req: session.LoginRequest) => {
        this.setState({loading: true})
        const result = await Login(req);
        this.setState({loading: false})

        if (!this.checkHTTPResult(result)) {
            return
        }

        // refresh to redirect to main page
        window.location.href = URLRoot;

        return
    }
}
