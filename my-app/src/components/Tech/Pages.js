import React from 'react';

import TechList from './List';
import Form from "./Form";

const TechPage = () => {

  return (
    <>
    <div style={{width:"1356px",margin:"0 auto"}}>
      <Form></Form>
      <h1>List of tech</h1>
      <TechList />
    </div>
    </>
  );
};

export default TechPage;