import mongoose, { Schema, model } from "mongoose";

//modelo para mongoose con los campos nombre, appat, apmat
const empleadoSchema = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	appat: {
		type: String,
		required: true,
	},
	apmat: {
		type: String,
		required: true,
	},
	fechaalta: {
		type: Date,
		default: Date.now,
	},
});

const empleadoModel =
	mongoose.models.empleados || model("empleados", empleadoSchema);

export default empleadoModel;
