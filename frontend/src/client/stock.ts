import { HTTPResult, Method, SendRequest } from 'client/common';
import { stock } from 'proto/tweb/stock';

export const FetchStockDaily = async (req: stock.FetchStockDailyRequest): Promise< HTTPResult<stock.FetchStockDailyResponse> > => {
    return await SendRequest<stock.FetchStockDailyResponse>(Method.POST, `/stocks/daily/`, req);
}