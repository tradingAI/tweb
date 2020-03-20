import React from 'react';
import { DatePicker, Input, message } from 'antd';
import BaseComponent from 'components/Base';
import StockViewer from 'components/stock/Stock';
import { FetchStockDaily } from 'client/stock';
import {stock} from 'proto/stock';
import moment from 'moment';
import intl from 'react-intl-universal';
import locale from 'antd/es/date-picker/locale/zh_CN';

import './dashboard.less'

const { RangePicker } = DatePicker;
const { Search } = Input;

interface State{
    tsCode: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    dailys: number[][];
}

class Dashboard extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        tsCode: "000001.SZ",
        startDate: moment().subtract('days',30),
        endDate:  moment(),
        dailys: [],
    };

    componentDidMount (){
        this.fetchStockDaily(this.state.tsCode);
    }

    fetchStockDaily = async (tsCode: string) => {
        const {startDate, endDate} = this.state;
        const req = stock.FetchStockDailyRequest.create({
            code: tsCode,
            start: startDate.unix(),
            end: endDate.unix(),
        });
        const resp = await FetchStockDaily(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }

        let dailyData = [];

        for (let daily of resp.response?.dailys || []){
            let tradeDate = daily.trade_date;
            let open = daily.open;
            let high = daily.high;
            let low = daily.low;
            let close = daily.close;
            dailyData.push([tradeDate, open, close, low, high]);
        }

        dailyData.reverse();

        this.setState({
            dailys: dailyData as number[][]
        })
    }

    changeDate = (e: any) => {
        if (e){
            this.setState({
                startDate: e[0],
                endDate: e[1],
            })
        }else{
            this.setState({
                startDate: moment(),
                endDate: moment(),
            })
        }
    }

    onTsCodeSearch = (val: string)=> {
        if (!this.checkParams(val)){
            return
        }

        this.fetchStockDaily(val);
    }

    onTsCodeChange = (e: any)=> {
        this.setState({
            tsCode: e.target.value
        })
    }

    checkParams = (tsCode: string) =>{
        const {startDate, endDate} = this.state;
        if (startDate === moment() || endDate === moment()){
            message.error(intl.formatMessage({id:"dateRangeIsEmpty"}));
            return false
        }

        if (!tsCode){
            message.error(intl.formatMessage({id:"tsCodeIsEmpty"}));
            return false
        }

        return true
    }

    render() {
        const {tsCode, startDate, endDate, dailys} = this.state;
        return (
            <div className="stock_viewer_wrapper">
                <div className="input_params">
                    <RangePicker
                        locale={locale}
                        format={'YYYY/MM/DD'}
                        defaultValue={[startDate, endDate]}
                        onChange={this.changeDate}
                        style={{width: '300px', marginRight: '20px'}}
                    />

                    <Search
                    placeholder={intl.formatMessage({id: "inputTsCode"})}
                    onSearch={this.onTsCodeSearch}
                    onChange={this.onTsCodeChange}
                    value={tsCode}
                    style={{ width: 200 }}/>
                </div>
                <StockViewer
                    tsCode={tsCode}
                    dailys={dailys}
                />
            </div>
        )
    }
}

export default Dashboard;
