import { ConfigProvider } from 'antd';
import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import intl from 'react-intl-universal';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from 'store';

import './index.less';

// i18n
const lang = document.querySelector('html')!.lang || 'zh_CN';
import('antd/es/locale/' + lang + '.js').then(locale => {
    const locales = {
        [lang]: require('locales/' + lang + '.json'),
    }
    intl.init({
        currentLocale: lang,
        locales,
    });

    ReactDOM.render(
        (
            <Provider store={store}>
                <ConfigProvider locale={locale}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ConfigProvider>
            </Provider>
        ),
        document.getElementById('root'),
    );
})
