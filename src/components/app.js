import React,{Component} from 'react';
import SearchBar from '../containers/search_bar';
import CityList from '../containers/city_lists';

class App extends Component{
    render(){
        return(
            <div>
                <SearchBar/>
                <CityList/>
            </div>
        );
    }
}

export default App;