import React from 'react'

import {connect} from 'react-redux';

const SmurfCardList = () => {
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


export default connect(mapStateToProps, {})(SmurfCardList)
