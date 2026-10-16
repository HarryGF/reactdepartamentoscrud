import React, { Component } from 'react'
import HomeComponent from './HomeComponent'
import { Navigate } from 'react-router-dom'
import ServiceDepartamentos from '../services/ServiceDepartamentos'

export default class DeleteDepartamento extends Component {

    service = new ServiceDepartamentos()

    state = {
        status: false
    }

    deleteDepartamento = (idDepartamento, borrar) => {
        if (borrar) {
            this.service.deleteDepartamentos(idDepartamento).then(result => {
                console.log("Departamento borrado")
            })
        } else {
            console.log("Cancelando operacion")
        }
        this.setState({
            status: true
        })
    }

    render() {
        return (
            <div style={{margin:'auto', width: '60%'}}>
                {
                    this.state.status == true &&
                    <Navigate to='/'/>
                }
                <h1>Estas seguro que quieres borrar este componente?</h1>
                <table className='table table-info'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{this.props.id}</th>
                            <th>{this.props.nombre}</th>
                            <th>{this.props.localidad}</th>
                        </tr>
                    </tbody>
                </table>
                <button  className='btn btn-info'
                onClick={() => {
                    this.deleteDepartamento(this.props.id, false)
                }}>
                    Cancelar
                </button>
                <button className='btn btn-danger'
                onClick={() => {
                    this.deleteDepartamento(this.props.id, true)
                }}>
                    Borrar
                </button>
            </div>
        )
    }
}
