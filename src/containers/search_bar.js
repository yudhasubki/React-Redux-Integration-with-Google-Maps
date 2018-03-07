import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            query : ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    onInputChange(event){
        this.setState({ query:event.target.value});
    }

    submitHandler(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.query);
        this.setState({ query:''});
    }

    render(){
        return(
            <form className="mb-3" onSubmit={this.submitHandler}>
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.query} onChange={ this.onInputChange } placeholder="Search for us country..." />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Submit</button>
                    </span>
                </div>   
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);