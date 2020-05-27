import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import auth from "helpers/auth";

const api = 'https://serene-mesa-35124.herokuapp.com';

function withAuthMethods(Component) {
  class WithAuthMethods extends React.Component {
    signIn = async (payload) => {
      try {
        // ajax запрос
        const { data } = await axios.post(`${api}/api/auth/login`, payload);

        // получим ответ
        console.log(data);
        
        // helpers/auth.js setAuthInformation
        // auth.setAuthInformation(Math.round(Math.random*1000));
        auth.setAuthInformation(data.token);

        // редирект на главную страницу
        this.props.history.push('/');
      } catch (error) {

      }
    }

    signUp = async (payload) => {
      // ajax запрос
      const { data } = await axios.post(`${api}/api/auth/register`, payload);
      // получим ответ
      console.log(data);
      // редирект на страницу логина
      this.props.history.push('/login');
    }

    leave = () =>{
      auth.removeAuthInformation();
      this.props.history.push('/login');
    }

    render() {
      console.log('hoc WithAuthMethods', this.props)
      return (
        <Component
          {...this.props}
          signIn={this.signIn}
          signUp={this.signUp}
          leave={this.leave}
        />
      )
    }
  }

  return withRouter(WithAuthMethods);
}

export default withAuthMethods;