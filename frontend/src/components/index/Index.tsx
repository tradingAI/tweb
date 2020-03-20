import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd';
import Header  from 'components/index/Header';
import Siderbar from 'components/index/SiderBar';
import routes from 'components/AppRoute'

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <Header/>
                <Layout>
                    <Siderbar/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {routes.map((route, i) => (
                            <Route key={i} exact={true} path={route.path} component={route.component}/>
                        ))}
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
