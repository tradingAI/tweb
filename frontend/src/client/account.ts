import { HTTPResult, Method, SendRequest } from 'client/common';
import { account } from 'proto/account';

export const FetchAccountList = async (req: account.FetchAccountRequest): Promise< HTTPResult<account.FetchAccountResponse> > => {
    return await SendRequest<account.FetchAccountResponse>(Method.GET, `/accounts/`, req);
}

export const CreateAccount = async (req: account.CreateAccountRequest): Promise< HTTPResult<account.CreateAccountResponse> > => {
    return await SendRequest<account.CreateAccountResponse>(Method.POST, `/accounts/`, req);
}

export const UpdateAccount = async (req: account.UpdateAccountRequest): Promise< HTTPResult<account.UpdateAccountResponse> > => {
    return await SendRequest<account.UpdateAccountResponse>(Method.PATCH, `/accounts/${req.id}/`, req);
}

export const DeleteAccount = async (req: account.DeleteAccountRequest): Promise< HTTPResult<account.DeleteAccountResponse> > => {
    return await SendRequest<account.DeleteAccountResponse>(Method.DELETE, `/accounts/${req.id}/`, req);
}