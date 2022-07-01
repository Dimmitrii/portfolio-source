import React from 'react';
import withAuthMethods from '../WithAuthMethods';

class LoginForm extends React.Component {
  state = {
    name: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.name.length < 3){
      alert("Name must have at least 3 characters")
      return;
    }
    localStorage.setItem("name",this.state.name);
    localStorage.setItem("token",Math.round(Math.random()*10000000));
    this.props.history.push("/");
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input name="name" className="form-control" placeholder="Name" onChange={this.handleChange} />
          </div>
          <div className="col-auto">
           {/* <input name="password" type="password" className="form-control" placeholder="Пароль" onChange={this.handleChange} /> */}
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </div>
      </form>
    )
  }
}

export default withAuthMethods(LoginForm);