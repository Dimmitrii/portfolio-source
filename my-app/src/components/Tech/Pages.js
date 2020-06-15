import React from 'react';

import TechList from './List';
import Form from "./Form";

const TechPage = () => {

  return (
    <>
      <Form></Form>
      <h1>List of tech</h1>
      <TechList />
    </>
  );
};

export default TechPage;