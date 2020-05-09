import React from 'react';
import {connect} from 'react-redux';
import {deleteSmurf, updateSmurf} from '../store/actions'

import './App.css'

const SmurfCard = (props) => {

    const handleDeleteSmurf = e => {
        e.preventDefault()
        props.deleteSmurf(props.smurf.id)
    }

    const handleUpdateSmurf = e => {
        e.preventDefault()
    }

return (
        <div>
        <p>Name: {props.smurf.name}</p>            
        <p>Age: {props.smurf.age}</p>            
        <p>Height: {props.smurf.height}</p>  
        <button onClick={handleDeleteSmurf}>Delete</button>          
        <button onClick={handleUpdateSmurf}>Update</button>          
        </div>
    )
}

export default connect(null, {deleteSmurf, updateSmurf})(SmurfCard)
