import React from 'react';
import {connect} from "react-redux";

import {addPost,editPost,toggleEditPost} from "../../redux/post/actions";

class Form extends React.Component {
  state = {
    title: this.props.selectedPost? this.props.selectedPost.title : "",
    body:this.props.selectedPost? this.props.selectedPost.body : "",
  }
  handleChange = (e)=>{
    const {value,name} = e.target;
    this.setState({[name]:value})
  }
  handleClick = ()=>{
    const {title,body} = this.state;
    const {selectedPost} = this.props;
    const item = {title,body};
    if(title === "" || body ===""){
      alert("форма неправильная");
      return;
    }
    if(this.props.isEdit){
      console.log("fasfas");
      selectedPost.title = title;
      selectedPost.body = body;
      this.props.toggleEditPost(false);
      this.props.editPost(selectedPost);
      return true;
    }
    this.props.addPost(item);
    this.setState({
      title: "",
      body:"",
    });

  }
  render(){
    return (
        <>
            <div className="form-group row">
              <div className="col-sm-2 col-form-label">Post title</div>
              <div className="col-sm-10">
                  <input type="text" placeholder="Title" className="form-control" name="title" onChange={this.handleChange} value={this.state.title}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2 col-form-label">Post body</div>
              <div className="col-sm-10">
                  <input type="text" placeholder="Body" className="form-control" name="body" onChange={this.handleChange} value={this.state.body} />
              </div>
              <input type="submit" className="btn btn-primary float-right" value={this.props.isEdit? "Change" :"Add"} onClick={this.handleClick}/>
            </div>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.post.toggleEditPost,
  }
}

const actions = {addPost,editPost,toggleEditPost};

export default connect(mapStateToProps,actions)(Form);