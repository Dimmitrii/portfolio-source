import React from 'react'

function withClickEvent(Component){
    class WithClickEvent extends React.Component {

        state = {
            counter:0,
        }

        handleClick = ()=>{
            this.setState({counter:this.state.counter+1});
        }

        componentDidMount(){
            document.addEventListener("click",this.handleClick,true);
        }

        componentWillUnmount(){
            document.removeEventListener("click",this.handleClick);
        }

        render() {
            console.log(this.state);
            return (
                <Component {...this.props} counter={this.state.counter}/>
            )
        }
    }
    return WithClickEvent;
}

export default withClickEvent;
