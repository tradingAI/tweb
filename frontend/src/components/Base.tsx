import { message } from 'antd';
import { HTTPResponse, HTTPResult } from 'client/common';
import { common } from 'proto/common';
import { URLRoot } from 'common';
import React from 'react';
import intl from 'react-intl-universal';

export default class Base<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
    checkHTTPResult = <Resp extends HTTPResponse>(res: HTTPResult<Resp>): boolean => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
            this.error(`error.http.${res.statusCode}`)
            if (res.statusCode === 401) {
                // reset url for re-login
                // reset the page to force to login page
                window.location.href = URLRoot;
            }
            return false
        }

        const resp = res.response;

        // check business error
        if (resp && resp.error) {
            this.error(`error.proto.${common.Error[resp.error]}`)
            return false
        }


        // fine
        return true
    }

    error = (msg: string) => {
        message.error(intl.get(msg) || msg);
    }

    success = (msg: string) => {
        message.success(intl.get(msg) || msg);
    }
}
