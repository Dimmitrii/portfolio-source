import React from "react";

class Searchform extends React.Component{
    state={
        query:"",
    }
    handleChange = (e)=>{
        this.setState({query:e.target.value});
    }
    handleClick = ()=>{
        if(this.state.query !== ""){
            this.props.addQuery(this.state.query);
            this.setState({query:""});
        }
        else{
            alert("Поле пустое")
        }
    }
    render(){
        return(
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="" value={this.state.query} onChange={this.handleChange}/>
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this.handleClick}>Искать</button>
                </div>
            </div>
        );
    }
}

export default Searchform;