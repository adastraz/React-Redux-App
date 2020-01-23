import React from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import {fetchActivityC, fetchActivityL, fetchActivityE} from '../actions'

const TextAlign = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 1%;
    margin:2%;
    border-radius:2.5rem;
    background: #A6EEE6FF;
    color: #526E2DFF;
    border: .25rem solid hotpink;
`

const getReandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
}
console.log(`random number${getReandomInt(20)}`)

const StarWars = props => {
    return(
        <div>
            <button onClick={props.fetchActivityC}>Get Characters</button>
            <button onClick={props.fetchActivityL}>Get Locations</button>
            <button onClick={props.fetchActivityE}>Get Episodes</button>
            {!props.character && !props.isLoading && (
                <h2>Unknown</h2>
            )}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )}
            {props.character && !props.isLoading && 
            props.character.map(item => {
                return (
                <TextAlign>
                    <h2 key={item.id}>{item.name}</h2>
                </TextAlign>)
            })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        character: state.character,
        error: state.error
    }
}
export default connect(mapStateToProps, {fetchActivityC, fetchActivityL, fetchActivityE})(StarWars)