import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import PostList from './List';
import Form from "./Form";
import { fetchPosts, deletePost } from '../../redux/post/actions';
import PostPagination from "./Pagination";
import getNumbersForPagination from "../../utils/getNumbersForPagination";

import Spinner from '../common/Spinner';

const varietyOfPostsPerPage=[5,10,25,50];

class PostListPage extends React.Component {

  state={
    currentPage:1,
    postsPerPage:5,
  }


  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.fetchPosts();
    }
  }

    showedPosts = ()=>{
    // console.log(this.props.posts.slice((this.state.currentPage-1)*this.state.postsPerPage,this.state.currentPage*this.state.postsPerPage))
      // if (!this.props.isLoaded) {
        return this.props.posts.slice((this.state.currentPage-1)*this.state.postsPerPage,this.state.currentPage*this.state.postsPerPage)
      // }
      // return [1,2]
    }

      handlePaginationClick = (e)=>{
        const {textContent,title} = e.target;
        if(title === "postsPerPage"){
          this.setState({currentPage:1})
        }
        if(textContent === "..."){
          return;
        }
        // console.log(name)
        this.setState({[title]:textContent});
        console.log(textContent);
        console.log(this.state);
      }

  render() {
    // console.log(this.props.posts.slice((this.state.currentPage-1)*this.state.postsPerPage,this.state.currentPage*this.state.postsPerPage))
    const currentPosts = this.props.posts.slice((this.state.currentPage-1)*this.state.postsPerPage,this.state.currentPage*this.state.postsPerPage);

    const { deletePost } = this.props;
    const pagination = <PostPagination pages={getNumbersForPagination(this.props.posts.length,this.state.postsPerPage,this.state.currentPage)} varietyOfPostsPerPage={varietyOfPostsPerPage} onClick={this.handlePaginationClick} postsPerPage={this.state.postsPerPage} currentPage={this.state.currentPage}/>

    return (
      <div style={{maxWidth:"1356px",margin:"0 auto"}}>
        {this.props.isLoaded ?
        <>
          <Form/>
          {pagination}
          <PostList posts={currentPosts} onDelete={deletePost} />
          {pagination}
        </> : <Spinner/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.list,
    isLoaded: state.post.isListLoaded,
  };
}

const actions = { fetchPosts, deletePost };

export default connect(mapStateToProps, actions)(PostListPage);
