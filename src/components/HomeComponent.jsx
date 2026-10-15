import React, { Component } from 'react'
import loading from './../assets/images/loading.gif';
import ServiceDepartamentos from './services/ServiceDepartamentos';
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {

    service = new ServiceDepartamentos()
    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {
            this.setState({
                departamentos: result,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

    render() {
        if (this.state.status == true){
            return (
            <div style={{margin:'auto', width: '50%'}}>
                <h1>Home Component</h1>
                <table className='table table-info'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dept,index) => {
                                return (<tr key={index}>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <NavLink className='btn btn-info'
                                        to={"/update/" + dept.numero
                                            + "/" + dept.nombre
                                            + "/" + dept.localidad
                                        }>
                                            Edit
                                        </NavLink>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                    <tbody></tbody>
                </table>
            </div>
            )
        }else{
            return (<img src={loading} alt="loading..."/>)
        }
    }
}
