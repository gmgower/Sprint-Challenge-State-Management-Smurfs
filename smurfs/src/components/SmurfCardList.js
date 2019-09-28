import React, {useEffect} from 'react'

import {connect} from 'react-redux';

import {getSmurfs} from '../store/actions'

const SmurfCardList = ({getSmurfs, isFetching, smurfs, error}) => {


    useEffect(() => {
        getSmurfs()
    }, [getSmurfs])

    if(isFetching) {
        return <h2>Fetching smurf family for ya!</h2>
    }


    return (
        <div>
            <h1>Test</h1>
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


export default connect(mapStateToProps, {getSmurfs})(SmurfCardList)
