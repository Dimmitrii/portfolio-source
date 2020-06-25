import React from "react";

class Searchform extends React.Component{
    state={
        query:"",
    }

    inputRef = React.createRef();

    componentDidMount(){
        this.inputRef.current.focus();
    }

    handleChange = (e)=>{
        this.setState({query:e.target.value});
    }

    handleEnterClick = (e)=>{
        if(e.keyCode === 13){
            this.handleClick();
        }
    }

    handleClick = ()=>{
        if(this.state.query.trim() !== ""){
            this.props.addQuery(this.state.query);
            this.setState({query:""});
        }
        else{
            alert("Empty input")
        }
    }
    render(){
        return(
            <div className="input-group mb-3" style={{width:"1356px",margin:"0 auto"}}>
                <input ref={this.inputRef} type="text" className="form-control" placeholder="" value={this.state.query} onChange={this.handleChange} onKeyDown={this.handleEnterClick}/>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this.handleClick}>Find</button>
                </div>
            </div>
        );
    }
}

export default Searchform;