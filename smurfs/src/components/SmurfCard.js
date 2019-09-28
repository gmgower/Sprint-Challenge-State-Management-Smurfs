import React from 'react';
import {connect} from 'react-redux';

import './App.css'


const SmurfCard = (props) => {


return (
        <div>
        <p>Name: {props.smurf.name}</p>            
        <p>Age: {props.smurf.age}</p>            
        <p>Height: {props.smurf.height}</p>            
        </div>
    )
}

export default connect(null, {})(SmurfCard)
