import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import css from '../../style/style.css';

class CityList extends Component{

    renderList(cityData){
        const cityName = cityData.city.name;
        const temps    = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const lat      = cityData.city.coord.lat;
        const lon      = cityData.city.coord.lon;

        return (
            <tr key={cityName}>
                <td><GoogleMap className="map" lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
                <td>
                    <Chart data={pressure} color="green" />
                </td>
                <td>
                    <Chart data={humidity} color="black" />
                </td>
            </tr>
        );
    }

    render(){
        return(
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City </th>
                            <th>Temperature (K) </th>
                            <th>Pressure (hPa) </th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.weather.map(this.renderList)}
                    </tbody>
                </table>
        );
    }
}

function mapPropsToState(state){
    return{
        weather:state.weather
    }
}

export default connect(mapPropsToState)(CityList);