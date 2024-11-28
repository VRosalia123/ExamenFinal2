import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema({
    nombreEmpleado: {
        type: String,
        required: [true, 'El nombre del empleado es obligatorio']
    },
    puesto: {
        type: String,
        required: [true, 'El puesto es obligatorio']
    },
    salario: {
        type: Number,
        required: [true, 'El salario es obligatorio'],
        min: [0, 'El salario no puede ser negativo']
    },
    estado: {
        type: String,
        default: 'Activo'
    }
});


const Empleados = mongoose.model('Empeados', empleadoSchema)

export default Empleados