import React from 'react'
//style
import './styles/sidebar.css'
//img
import epayco from '../img/img3.svg'
import house from '../img/house.svg'
import cliente from '../img/client.svg'

const Sidebar= () =>{
    return(
        <div className="sidebar">
            <img className="image-epa" src={epayco} alt=""/>
            <p className="name">ALEXANDER CEBA...</p>
            <div className="option">
                <img className="ico" src={house} alt=""/>
                <span className="text-icon"> Dashboard </span>

            </div>
            <div>
                <img  className="ico" src={cliente} alt=""/>
                <span className="text-icon"> Clientes </span>

            </div>

        </div>
    )
}

export default Sidebar