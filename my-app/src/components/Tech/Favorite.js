import React from "react";
import {connect} from "react-redux";

import {addTechToFavoriteAndUnFavorite} from "../../redux/tech/actions";
import TechFavoriteItem from "./FavoriteItem";

class TechFavorite extends React.Component{
    state={

    }

    render(){
        const favoriteItems = this.props.techList.filter(item=>item.favorite === true);
        // console.log(this.props.techList);
        const items = favoriteItems.map(tech=>{
            return(
                <TechFavoriteItem key={tech.id} id={tech.id} {...tech} onClick={this.props.addTechToFavoriteAndUnFavorite}/>
            );
        });
        return(
            <>
                {items}
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        techList:state.tech.tech,
    }
}

const mapDispatchToprops = (dispatch)=>{
    return{
        addTechToFavoriteAndUnFavorite: (id)=>dispatch(addTechToFavoriteAndUnFavorite(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(TechFavorite);