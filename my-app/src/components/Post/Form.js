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
              <div className="col-sm-2 col-form-label">Название поста</div>
              <div className="col-sm-10">
                  <input type="text" placeholder="Название" className="form-control" name="title" onChange={this.handleChange} value={this.state.title}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2 col-form-label">Тело поста</div>
              <div className="col-sm-10">
                  <input type="text" placeholder="Тело" className="form-control" name="body" onChange={this.handleChange} value={this.state.body} />
              </div>
              <input type="submit" className="btn btn-primary float-right" value={this.props.isEdit? "Изменить" :"Добавить"} onClick={this.handleClick}/>
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