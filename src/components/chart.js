import _ from 'lodash';
import React,{Component} from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
    return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{ average(props.data) }</div>
        </div>
        
    );
}

export default Chart;