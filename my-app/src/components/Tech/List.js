import React from 'react';
import { connect } from 'react-redux';

import TechItem from './Item';
import { deleteTech } from '../../redux/tech/actions';

const TechList = (props) => {
  const { techList = [] } = props;
  console.log(props);

  const $items = techList.map(tech => (
    <TechItem key={tech.id} id={tech.id} {...tech} onClick={props.deleteTech} />
  ))

  return (
    <>
      {$items}
    </>
  )
}

const mapStoreToProps = (store) => {
  console.log(store);

  return {
  //пропса вашей компоненты
            //путь к данным в редакс хранилище
    techList: store.tech.tech,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  //пропса вашей компоненты
                               //action creator, импортированный вверху файла
    deleteTech: (id) => dispatch(deleteTech(id)),
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(TechList);

