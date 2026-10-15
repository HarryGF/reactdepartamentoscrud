import React, { Component } from 'react'
import ServiceDepartamentos from './services/ServiceDepartamentos'
import loading from './../assets/images/loading.gif';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {
    
    service = new ServiceDepartamentos()
    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()
    state = {
        status: false, 
        mensaje: null
    }

    insertDepartamento = (event) => {
        event.preventDefault()
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.service.createDepartamento(departamento)
            .then((response) => {
                this.setState({
                    status: true
                })
            }) .catch((error) => {
                this.setState({
                    mensaje: error.message
                })
            })
    }

    render() {
        if (this.state.status == true) {
            return (<Navigate to='/'/>)
        } else {
            return (
                <div style={{margin:'auto', width: '50%'}}>
                    <h1> Crear departamento</h1>
                    {
                        this.state.mensaje &&
                        (<p style={{color:'red', fontWeight: 'bold'}}>
                            {this.state.mensaje}
                        </p>)
                    }
                    <form>
                        <label>Id departamento:</label>
                        <input type="number" className='form-control'
                            ref={this.cajaNumero}/>
                            <label>Nombre:</label>
                        <input type="text" className='form-control'
                            ref={this.cajaNombre}/>
                            <label>Localidad:</label>
                        <input type="text" className='form-control'
                            ref={this.cajaLocalidad}/>
                        <button className='btn btn-warning'onClick={this.insertDepartamento}>
                            Crear
                        </button>
                    </form>
                </div>
            )
        }
    }
}