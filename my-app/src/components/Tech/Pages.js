import React from 'react';

import TechList from './List';
import Form from "./Form";

const TechPage = () => {

  return (
    <>
      <Form></Form>
      <h3>Список техники</h3>
      <TechList />
    </>
  );
};

export default TechPage;