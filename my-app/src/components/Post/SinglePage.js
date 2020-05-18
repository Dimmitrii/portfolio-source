import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost,toggleEditPost } from '../../redux/post/actions';
import Form from "./Form";

class PostSinglePage extends React.Component {

  // state = {
  //   changingPost: false,
  // }

  handleClickEditButton = ()=>{
    this.props.toggleEditPost(true);
  }

  handleClickExitButton = ()=>{
    this.props.toggleEditPost(false);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { selectedPost } = this.props;
    console.log(this.props.isEdit);

    return (
      <>
      <div className="mb-3" onClick={this.handleClickExitButton}>
          <Link to="/posts" className="btn btn-sm btn-outline-primary">Назад</Link>
      </div>
      {this.props.isEdit?
      <Form selectedPost={selectedPost}/>
      :
      <div>
        <div className="card">
          <h5 className="card-header">{selectedPost.title}</h5>
          <div className="card-body">
            <h5 className="card-title">{selectedPost.body}</h5>
            <p className="card-text"></p>
            <button  className="btn btn-primary" onClick={this.handleClickEditButton}>Изменить пост</button>
          </div>
        </div>
      </div>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPost: state.post.selectedPost,
    isEdit: state.post.toggleEditPost,
  };
}

const actions = { fetchPost,toggleEditPost };

export default connect(mapStateToProps, actions)(PostSinglePage);