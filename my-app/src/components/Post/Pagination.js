import React from "react";
class PostPagination extends React.Component {
    render() {
        console.log(this.props);
        console.log(this.props.currentPage);
        return (
            <div className="menu">
                <div className="menuTextLeft" name="currentPage" onClick={this.props.onClick}>
                    {this.props.pages.map((item,index)=>{
                        return  <div style={{backgroundColor: item===+this.props.currentPage? "#ff616b":null}} className="partOfText" title="currentPage" key={index}>{item}</div> 
                    })}
                </div>
                <div className="menuTextRight" name="postPerPage" onClick={this.props.onClick}>
                    {this.props.varietyOfPostsPerPage.map((item,index)=>{
                        return <div style={{backgroundColor: item===+this.props.postsPerPage? "#ff616b":null}} className="partOfText" title="postsPerPage" key={index}>{item}</div> 
                    })}
                </div>
            </div>
        )
    }
}

export default PostPagination
