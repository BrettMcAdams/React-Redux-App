import React from 'react'
import { connect } from 'react-redux'
import BBCharacter from './BBCharacter'

function BBCharacters(props) {
    console.log(props);
    return (
        <>
            <h3>Characters:</h3>
            {props.character.map(item => {
                return <BBCharacter key={item.char_id} character={item} />
            })}
        </>
    )
}

function mapStateToProps(state) {
    return {
        character: state.character
    }
}

export default connect(mapStateToProps, {})(BBCharacters)
