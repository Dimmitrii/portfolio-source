import React from 'react'

import ListOfCats from "./ListOfCats";
import SelectedCat from "./SelectedCat";
import Settings from "./Settings";
import Spinner from "../common/Spinner";

const axios = require('axios').default;
const CatsUrl = "https://serene-mesa-35124.herokuapp.com/files";

class CatsApp extends React.Component {

    state={
        cats:[],
        selectedCat:"",
        search:"",
        isLoaded:false,
    }

    componentDidMount(){
        axios(`${CatsUrl}/cats/list.json`)
        .then(response=>{
            console.log(response);
            const cats = response.data.data.map(cat=>{
                return {...cat,isRemoved:false}
            });
            this.setState({cats,isLoaded:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }

    selectCat = (id)=>{
        console.log(id);
        axios(`${CatsUrl}${id}`)
        .then((response)=>{
            this.setState({selectedCat:response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    getCats = ()=>{
        const {cats,search} = this.state;

        let copy = [...cats.filter(item=>item.isRemoved!==true),...cats.filter(item=>item.isRemoved===true) ];


        if(search !== ""){
            copy = copy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) );
        }
        return copy;
    }

    searchCats = (e)=>{
        const {value} = e.target;
        this.setState({search:value});
        // console.log(value);
    }

    removeAndUnRemoveCat = (id)=>{
        let copy = [...this.state.cats];
        copy = copy.map(item=>{
            if(item.id === id){
                return item.isRemoved? item.isRemoved=false : item.isRemoved=true;
            }
            return item;
        });
        this.setState(copy);
    }

    render() {
        const currentCats = this.getCats();
        console.log(currentCats);
        console.log(this.state.cats);
        return (
            <>
            {this.state.isLoaded?
            <div>
                <Settings search={this.searchCats} value={this.state.search}/>
                <ListOfCats cats={currentCats} selectCat={this.selectCat} removeAndUnRemove={this.removeAndUnRemoveCat}/>
                <SelectedCat selectedCat={this.state.selectedCat}/>
            </div>
            :
            <Spinner/>}
            </>
        )
    }
}

export default CatsApp;