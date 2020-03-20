import Cookies from 'js-cookie';
import { common } from 'proto/common';
import { session } from 'proto/session';

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export interface HTTPResponse {
    error?: common.Error;
}

export interface HTTPResult<Resp extends HTTPResponse> {
    statusCode: number;
    response?: Resp;
}

export const SendRequest = async <Resp extends HTTPResponse>(method: Method, url: string, data?: any): Promise< HTTPResult<Resp> > => {
    // The backend uses JSON instead of ProtoJSON, since web.ParseQueryString only support JSON.
    // The former will encode enum value as-is, i.e. as integers, while the latter will turn them into strings.
    // If we directly using request from XXXRequest.create(), the resulted object will be a ProtoJSON, which will parse the enum (e.g. render `gender` as `MALE` instead of `1`).
    // That is unexpected for backend. Thus, we copy the request into a plain JSON object.
    // Beside, although protobufjs provides a `toObejct` static method for each message, I failed to figure out how to use it generically in this method. Thus, we use `Object.assign`.
    if (data) {
        data = Object.assign({}, data)
    }

    let body: string | undefined;
    if (data) {
        if (method === Method.GET) {
            const params = new URLSearchParams(data).toString()
            if (params){
                url += '?' + params
            }
        } else {
            body = JSON.stringify(data);
        }
    }

    const resp = await fetch(url, {
        body,
        method,
        headers: {
            'Content-Type': 'application/json',
            'Access-Token': getSession()?.token || '',
        },
    });

    const output = {
        statusCode: resp.status,
    } as HTTPResult<Resp>;

    if (output.statusCode === 401) {
        ClearSession()
    }

    if (resp.headers.get('content-type') === 'application/json') {
        output.response = (await resp.json()) as Resp;
    }

    return output;
}

const sessionCookie = 'session';

export function ClearSession(): void {
    Cookies.remove(sessionCookie);
}

export function SetSession(sess: session.ISession): void {
    // session does not expire
    Cookies.set(sessionCookie, sess);
}

export function getSession(): session.ISession | undefined {
    const sessObj = Cookies.get(sessionCookie)
    if (!sessObj) {
        return
    }
    const sess = session.Session.fromObject(JSON.parse(sessObj))
    return sess
}
