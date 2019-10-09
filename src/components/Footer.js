import React from 'react'
//style
import './styles/footer.css'
//img
import davivienda from '../img/img.svg'
import epayco from '../img/img2.svg'

const Footer= () =>{
    return(
        <div className="footer text-center">
            <p className="text"> ePayco &#169; 2011-2019 todos los derechos reservados.</p>
            <div>
                <img className="dav" src={davivienda} alt="davivienda"/>
                <img className="epa" src={epayco} alt="epayco"/>         
            </div>
        </div>
    )
}

export default Footer
