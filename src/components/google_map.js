import React from 'react';
import css from '../../style/style.css';
class GoogleMap extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
            }
        });
    }

    render(){
        return(
            <div className="map" ref="map" />
        );
    }
}

export default GoogleMap;