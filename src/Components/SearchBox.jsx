import React from 'react'

const SearchBox = ({ onChange }) => {
    return (
        <>
            <h2>Find contacts by name</h2>
            <input placeholder='Input a name' onChange={onChange}></input>
        </>
    )
}

export default SearchBox