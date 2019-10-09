import React from 'react'
import './styles/infoForm.css'
//components
import Form from './Form'

const InfoForm= () =>{
    return(
        <div className="card">
            <div className="card-header">
                Informacion del Formulario
            </div>
            <div className="card-body">
                <p className="card-text"><small className="text-muted">Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago</small></p>
                <Form />
            </div>
        </div>
    )
}

export default InfoForm