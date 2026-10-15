import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import DeleteDepartamento from './DeleteDepartamento'

export default class Router extends Component {
    render() {

        function UpdateElement() {
            let {id, nombre, localidad} = useParams()
            return(<UpdateDepartamento id={id} nombre={nombre} localidad = {localidad}/>)
        }

        function DeleteElement() {
            let {id, nombre, localidad} = useParams()
            return(<DeleteDepartamento id={id} nombre={nombre} localidad = {localidad}/>)
        }

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path="/" element={<UpdateDeleteElement/>}/>
                    <Route path="/create" element= {<CreateDepartamento/>}/>
                    <Route path="/update/:id/:nombre/:localidad" element={<UpdateElement/>}/>
                    <Route path="/delete/:id/:nombre/:localidad" element={<DeleteElement/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}