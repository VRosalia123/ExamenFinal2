import mongoose from "mongoose";
import Empleados from "../modules/Empleados.model.js.js";


export const getAllCursos = async (req, res) =>{
    console.log('Mostrando toda la lista de productos'.grey)
    try {
        const empleados = await Empleados.find({},{_v:0})
        if(empleados.length === 0){
            return res.status(404).json({
                msg:'No hay elementos dentro de la lista'
            })
        }

        return res.status(200).json({
            empleados
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const getIdCurso = async (req, res) => {
    console.log('Trayendo los elementos por id'.grey)
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }

        const empleados = await Empleados.findById(id);
        if(!empleados){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }

        return res.status(200).json({
            empleados
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const postCurso = async(req, res) => {
    console.log('Agregando elementos a la base de datos'.grey)

    const body = req.body
    const newEmpleado = new Empleados(body)
    try {
        const validarError = newEmpleado.validateSync();
        if(validarError){
            const errorMesage = Object.values(validarError.errors).map(error => error.message)
            return res.status(404).json({
                errorMesage
            })
        }

        await newEmpleado.save();
        return res.status(200).json({
            msg: 'Se ha agregado nuevo elemento',
            newEmpleado
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const putCurso = async(req, res) => {
    console.log('Actualizando elemento'.blue)
    const body = req.body
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }
        const empleados = await Empleados.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        if(!empleados){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }
        return res.status(200).json({
            msg: 'Elemento actualizado',
            empleados
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export const deleteCurso = async(req, res) =>{
    console.log('Eliminando elemento')
    const id = req.params.id

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: 'Id no falido'
            })
        }

        const deleteElement = await Empleados.findByIdAndDelete(id)

        if(!deleteElement){
            return res.status(404).json({
                error: 'No se ha encontrado elementos con ese id'
            })
        }

        return res.status(200).json({
            msg: 'Elemento eliminado',
            deleteElement
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}