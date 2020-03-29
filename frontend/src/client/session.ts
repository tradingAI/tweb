import { ClearSession, getSession, HTTPResult, Method, SendRequest, SetSession } from 'client/common';
import { session } from 'proto/tweb/session';

export const GetSession = () => {
    return getSession();
}

export const IsLoggedIn = () => {
    const sess = GetSession();
    if (sess) {
        return true;
    }
    return false;
}

export const Login = async (req: session.LoginRequest): Promise< HTTPResult<session.LoginResponse> > => {
    const resp = await SendRequest<session.LoginResponse>(Method.POST, `/sessions/login/`, req);
    const sess = resp.response?.session
    if (!sess) {
        return resp
    }

    // set session
    SetSession(sess);

    return resp;
}

export const Logout = async (req: session.LogoutRequest): Promise< HTTPResult<session.LogoutResponse> > => {
    const resp = await SendRequest<session.LogoutResponse>(Method.POST, `/sessions/logout/`, req);
    ClearSession()
    return resp;
}
