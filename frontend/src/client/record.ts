import { HTTPResult, Method, SendRequest } from 'client/common';
import { record } from 'proto/tweb/record';

export const FetchRecord = async (req: record.FetchRecordRequest): Promise< HTTPResult<record.FetchRecordResponse> > => {
    return await SendRequest<record.FetchRecordResponse>(Method.GET, `/conf/record/`, req);
}