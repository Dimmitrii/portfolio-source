import React from 'react';
import {connect} from "react-redux";

import {addTech} from "../../redux/tech/actions";

class Form extends React.Component {
  state = {
    title: "",
    price:"",
  }
  handleChange = (e)=>{
    const {value,name} = e.target;
    if(name === "price" && isNaN(+value)) return;
    this.setState({[name]:value})
  }
  handleClick= (e)=>{
    const {title,price} = this.state;
    const item = {title,price};
    if(title === "" || price ===""){
      alert("форма неправильная");
      return;
    }
    this.props.addTech(item);
    this.setState({
      title: "",
      price:"",
    });

  }
  render(){
    console.log(this.props)
    return (
        <>
            <div className="form-group row">
              <div className="col-sm-2 col-form-label">Title of tech</div>
              <div className="col-sm-10">
                  <input type="text" placeholder="Title" className="form-control" name="title" onChange={this.handleChange} value={this.state.title}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2 col-form-label">Price</div>
              <div className="col-sm-10">
                  <input type="text" placeholder="Price" className="form-control" name="price" onChange={this.handleChange} value={this.state.price} />
              </div>
            </div>
            <input type="submit" className="btn btn-primary float-right" value="Add tech" onClick={this.handleClick}/>
        </>
    );
  }
}

const mapDispatchToprops = (dispatch)=>{
  return{
    addTech: (item)=>{ dispatch(addTech(item))},
  }
}

export default connect(null,mapDispatchToprops)(Form);