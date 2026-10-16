import React, { Component } from 'react'
import Global from '../Global'
import ServiceHospitales from '../services/ServiceHospitales'
import TrabajadoresComponent from './TrabajadoresComponent'

export default class HospitalesMultiples extends Component {

    service = new ServiceHospitales()
    selecthospital = React.createRef()
    state = {
        hospitales: [],
        seleccionados: []
    }

    loadHospitales = async () => {
        let datos = await this.service.getHospitales()
        this.setState({
            hospitales: datos
        })
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault()
        let aux = []
        let options = this.selecthospital.current.options
        for (let op of options) {
            if (op.selected) {
                aux.push(op.value) 
            }
        }
        this.setState({
            seleccionados: aux
        })
    }

    componentDidMount = async () => {
        await this.loadHospitales()
    }

    render() {
        return (
            <div style={{margin:'auto', width: '90%'}} >
                <h1>Hospitales Multiples</h1>
                <form>
                    <label>Selecciones Hospitales</label>
                    <select ref={this.selecthospital} className='form-control' 
                    size="6" multiple> 
                        { 
                            this.state.hospitales.map((hospital, index) => { 
                                return (<option key={index} value={hospital.idHospital}> 
                                    {hospital.nombre} 
                                </option>) 
                            }) 
                        } 
                    </select> 
                    <button onClick={this.getHospitalesSeleccionados}
                    className='btn btn-info'>
                        Mostrar trabajadores
                    </button>
                </form>
                {
                    this.state.seleccionados.length != 0 &&
                    (<TrabajadoresComponent idhospitales={this.state.seleccionados}/>)
                }
            </div>
        )
    }
}
