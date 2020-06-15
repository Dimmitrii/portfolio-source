import React from 'react';
import {connect} from "react-redux";

import CoctailsList from "./List";
import CoctailsAlphabet from "./Alphabet";
import SelectedCoctail from "./SelectedCoctail";
import CoctailSetings from "./Settings";

class CoctailsPage extends React.Component {

    state={
        search:"",
    }

    getCoctails = ()=>{
        const {search} = this.state;
        const {coctails} = this.props;

        let copy = coctails.slice();

        console.log(copy);

        if(search !== ""){
            copy = copy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) );
        }
        return copy;
    }

    searchCoctails = (e)=>{
        const {value} = e.target;
        this.setState({search:value});
        // console.log(value);
    }

    render() {

        const currentCoctails = this.getCoctails();

        return (
            <div>
                <CoctailSetings onChange={this.searchCoctails} value={this.state.search} />
                <CoctailsAlphabet/>
                <CoctailsList coctails={currentCoctails}/>
                <SelectedCoctail/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        coctails:state.coctails.coctails,
    }
}

export default connect(mapStateToProps)(CoctailsPage);
