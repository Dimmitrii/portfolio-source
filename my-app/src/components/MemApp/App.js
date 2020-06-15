import React from 'react';
import axios from "axios";
import qs from "query-string";

class MemApp extends React.Component {

    state = {
        memes:[],
        id:"",
        text0:"",
        text1:"",
        numberOfMemes:"",
        pickedMemes:[],
        complitedMem:"",
    }

    inputRef = React.createRef();

    componentDidMount(){
        this.inputRef.current.focus();
        axios.get("https://api.imgflip.com/get_memes")
        .then((response)=>{
            console.log(response.data);
            console.log(response);
            this.setState({memes:response.data.data.memes.filter(item => item.box_count<3)});
        })
        .catch((error)=>{
            return error;
        })
    }

    handleChange = (e)=>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }

    confirmedNumberOfMemes = ()=>{
        const pickedMemes = this.state.memes.slice(0,+this.state.numberOfMemes)
        this.setState({pickedMemes});
    }

    handleEnterClick = (e)=>{
        if(e.keyCode === 13){
            this.confirmedNumberOfMemes();
        }
    }

    getId = (e)=>{
        this.setState({id:e.target.id})
    }

    handleClick = ()=>{
        const mem = {
            template_id:+this.state.id,
            username: "g_user_107257642549096835361",
            password: "1234",
            text0: this.state.text0,
            text1: this.state.text1,
            text2: this.state.text2,
            text3: this.state.text3,
            text4: this.state.text4,    
        }

        const requestDate = qs.stringify(mem);

        axios.post("https://api.imgflip.com/caption_image",requestDate)
        .then((response)=>{
            console.log(response);
            this.setState({complitedMem:response.data.data.url})
        })
        .catch(error=>{
            return error;
        })
    }

    render() {
        const memes = this.state.pickedMemes.map((item)=>{
            return <img width="250" height="272" key={item.id} style={this.state.id===item.id?{opacity:0.5}:null} id={item.id} src={item.url} alt=""/>
        });
        console.log(this.state);
        return (
            <div>
                <h2>Generator of memes</h2>
                   <div> 
                    <button onClick={this.confirmedNumberOfMemes} type="button" className="btn btn-secondary">Confirm</button> 
                    <input ref={this.inputRef} onKeyDown={this.handleEnterClick} onChange={this.handleChange} type="text" style={{width:200,borderRadius:"5px",height:"38px",border:"none",verticalAlign:"middle"}}   placeholder="Number of memes" name="numberOfMemes"/>
                   </div>
                   <div onClick={this.getId}>{memes}</div>
                   {!!this.state.pickedMemes.length? 
                   <div> 
                    <button onClick={this.handleClick} type="button" className="btn btn-secondary">Make meme</button> 
                    <input onChange={this.handleChange} type="text" style={{width:200,borderRadius:"5px",height:"38px",border:"none",verticalAlign:"middle"}} placeholder="Text1" name="text0"/>
                    <input onChange={this.handleChange} type="text" style={{width:200,borderRadius:"5px",height:"38px",border:"none",verticalAlign:"middle"}} placeholder="Text2" name="text1"/>
                   </div>: null}
                   {this.state.complitedMem? <img width="250" height="272" src={this.state.complitedMem} alt=""/>: null}
            </div>
        )
    }
}

export default MemApp