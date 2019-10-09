import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
//component
import Select from './Select'
//style
import './styles/form.css'
//alertas
import Swal from 'sweetalert2'

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
        if(nombre.trim() === '' || apellido.trim() === '' || pais.trim() === '' || documento.trim() === ''){
            // si hay algun campo vacio
            Swal.fire({
                type: 'error',
                titleText:'Formulario contiene errores',
                confirmButtonText:' Regresar',
                confirmButtonColor: '#40A8E6'
            })
            return
        }

        // si todos los campos estan llenos
        Swal.fire({
            type: 'success',
            titleText:'Formulario enviado con éxito',
            confirmButtonText:' Finalizar',
            confirmButtonColor: '#40A8E6'
        })
        // limpiar formulario
        setNombre('')
        setApellido('')
        setPais('')
        setDocumento('')

    }

    return(
        <Fragment>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="nombre"
                                value={nombre}
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
                                value={apellido}
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
                                value={pais}
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
                                value={documento}
                                onChange={ e => (setDocumento(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">enviar</button>
                <button type="reset" className="btn btn-outline-primary">cancelar</button>
            </form>
        </Fragment>
    )
}

export default Form 