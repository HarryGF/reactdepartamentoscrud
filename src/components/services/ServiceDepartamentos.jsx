import axios from 'axios';
import Global from '../../Global';

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function(resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";
            axios.get(url + request)
                .then((response) => {
                    console.log("Leyendo departamentos");
                    resolve(response.data);
            })
        })
    }

    createDepartamento(departamento) {
        return new Promise(function(resolve, reject) {
            let url = Global.urlApiDepartamentos
            let request = "api/departamentos"
            axios.post(url + request, departamento)
                .then((response) => {
                    console.log("Insertando departamento")
                    resolve()
                }).catch((error) => {
                    console.log("Error insertando" + error)
                    reject(error)
                })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function(resolve) {
            let url = Global.urlApiDepartamentos
            let request = "api/departamentos"
            axios.put(url + request, departamento)
                .then((response) => {
                    console.log("Actualizando departamento")
                    resolve(response)
                })
        })
    }

    deleteDepartamentos(idDepartamento) {
        return new Promise(function(resolve) {
            let url = Global.urlApiDepartamentos
            let request = "api/departamentos/" + idDepartamento
            axios.delete(url + request).then(response => {
                console.log("Departamento eliminado: " + idDepartamento)
                resolve(response)
            })
        })
    }
}