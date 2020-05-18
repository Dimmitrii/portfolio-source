import React from "react";
import {connect} from "react-redux";

import {addTechToFavoriteAndUnFavorite} from "../../redux/tech/actions";

class Page extends React.Component{

    state = {
        favorite:false,
    }

    handleClick = ()=>{
        const id = +this.props.match.params.id;
        new Promise((resolve,reject)=>{
           const favorite = this.props.addTechToFavoriteAndUnFavorite(id);
           resolve(favorite);
           reject("error");
        }).then(()=>{
            const item = this.props.techList.find(item=>item.id === +id);
            const {favorite} = item;
            console.log(favorite)
            this.setState({favorite});
        });
    }

    render(){
        const id = this.props.match.params.id;
        const item = this.props.techList.find(item=>item.id === +id);
        const {title,price,favorite} = item;
        return(
            <div className="card">
                <h5 className="card-header">{title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{price}</h5>
                    <p className="card-text"></p>
                    <button  className="btn btn-primary" onClick={this.handleClick}>{favorite? "Убрать из избранного" :"Добавить в избранное"}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        techList: state.tech.tech,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addTechToFavoriteAndUnFavorite: (id)=>dispatch(addTechToFavoriteAndUnFavorite(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);