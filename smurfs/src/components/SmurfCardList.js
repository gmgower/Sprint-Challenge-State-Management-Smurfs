import React, {useEffect, useState} from 'react'

import {connect} from 'react-redux';

import {getSmurfs, postSmurf} from '../store/actions'

import SmurfCard from './SmurfCard'

const SmurfCardList = ({getSmurfs, postSmurf, isFetching, smurfs, error}) => {
    const [addSmurfName, setAddSmurfName] = useState('')
    const [addSmurfAge, setAddSmurfAge] = useState('')
    const [addSmurfHeight, setAddSmurfHeight] = useState('')

    useEffect(() => {
        getSmurfs()
    }, [getSmurfs])

    if(isFetching) {
        return <h2>Fetching smurf family for ya!</h2>
    }

    const addNewSmurf = e => {
        e.preventDefault()
        let newSmurf = {
            name: addSmurfName,
            age: addSmurfAge,
            height: addSmurfHeight
        }
        postSmurf(newSmurf) // to posting actions
    }

    return (
        <div>
            {smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} key={smurf.id} />                
            })}
            <br />
            New Smurf Name: <input onChange={(e) => {setAddSmurfName(e.target.value)}} value={addSmurfName} />
            New Smurf Age: <input onChange={(e) => {setAddSmurfAge(e.target.value)}} value={addSmurfAge} />
            New Smurf Height: <input onChange={(e) => {setAddSmurfHeight(e.target.value)}} value={addSmurfHeight} />
            <button onClick={addNewSmurf}>Add Smurf </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurfs, postSmurf})(SmurfCardList)
