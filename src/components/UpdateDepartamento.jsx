import React, { Component } from 'react'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import { Navigate } from 'react-router-dom'

export default class UpdateDepartamento extends Component {

    service = new ServiceDepartamentos()
    cajaNumero = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()

    state = {
        status: false
    }

    actualizarDepartamento = (event) => {
        event.preventDefault()
        let departamento = {
            numero: parseInt(this.props.id),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        console.log(departamento)
        this.service.updateDepartamento(departamento).then(result => {
            console.log("Departamento actualizado")
            this.setState({
                status:true
            })
        })
    }

    render() {
        return (
            <div style={{margin:'auto', width: '60%'}}>
                {
                    this.state.status == true &&
                    <Navigate to='/'/>
                }
                <h1>Actualizar departamento</h1>
                <form>
                    <label>Nombre: </label>
                    <input type="number" value={this.props.id}
                        ref={this.cajaNumero} className='form-control' disabled/>
                    <label>Nombre: </label>
                    <input type="text" className='form-control'
                        defaultValue= {this.props.nombre }ref={this.cajaNombre}/>
                    <label>Localidad: </label>
                    <input type="text" className='form-control'
                        defaultValue= {this.props.localidad}    ref={this.cajaLocalidad}/>
                    <button onClick={this.actualizarDepartamento}
                    className='btn btn-info'>
                        Actualizar
                    </button>
                </form>
            </div>
        )
    }
}
