import React from 'react';

import withClickEvent from './WithClickevent';

const ClickCounter = (props)=>{
    // props.()
    return (
        <div className="fixed">
            {props.counter}
        </div>
    )
}

export default withClickEvent(ClickCounter);
