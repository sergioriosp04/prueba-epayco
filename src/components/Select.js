import React from 'react'

const Select = ({pais}) =>{
    return(
        <option value={pais.alpha2Code}>{pais.name}</option>
    )
}

export default Select