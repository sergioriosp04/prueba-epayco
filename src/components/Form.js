import React, { useState, useEffect } from 'react'
import axios from 'axios'
//component
import Select from './Select'
//style
import './styles/form.css'

const Form = () =>{
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [documento, setDocumento] = useState('')
    const [pais, setPais] = useState('')
    const [paises, setPaises] = useState([])

    const consultarApi = async() =>{
        const data = await axios.get('https://restcountries.eu/rest/v2/regionalbloc/usan')
        console.log(data.data)
        setPaises(data.data)
    }

    useEffect( () =>{
        consultarApi()
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={ e => (setNombre(e.target.value))}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                        <label>Apellido</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="apellido"
                            onChange={ e => (setApellido(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Seleccione un pais</label>
                        <select 
                            className="form-control"
                            onChange={e => (setPais(e.target.value))}
                        >
                            <option value="">seleccione un pais</option>
                            {
                                paises.map(pais =>(
                                    <Select
                                        pais={pais}
                                        key={pais.alpha2Code}
                                    />
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                        <label>Número de Documento</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="documento"
                            onChange={ e => (setDocumento(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary">enviar</button>
            <button className="btn btn-outline-primary">cancelar</button>
        </form>
    )
}

export default Form 