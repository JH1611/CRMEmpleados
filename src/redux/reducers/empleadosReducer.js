import { createSlice } from "@reduxjs/toolkit";
import {
	create,
	editar,
	eliminar,
	findAll,
} from "../services/empleadosService";

const initialState = {
	empleados: [],
	editando: {},
	loading: false,
	error: null,
};

export const empleadosSlice = createSlice({
	name: "empleados",
	initialState,
	reducers: {
		empleado: (state, action) => {
			state.editando = action.payload;
		},
	},
	extraReducers: builder => {
		//Buscar empleados
		builder.addCase(findAll.fulfilled, (state, action) => {
			state.empleados = action.payload;
		});
		//Crear empleados
		builder.addCase(create.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(create.fulfilled, (state, action) => {
			if (action.payload) {
				state.empleados.push(action.payload);
			}
			state.loading = false;
		});
		builder.addCase(create.rejected, (state, action) => {
			state.loading = false;
			console.log(action.payload);
		});
		//Editar empleados
		builder.addCase(editar.fulfilled, (state, action) => {
			const { nombre, appat, apmat } = action.payload.empleado;
			const empleadosActualizados = state.empleados.map(empleado =>
				empleado._id === action.payload.id
					? {
							_id: empleado._id,
							fechaalta: empleado.fechaalta,
							nombre,
							appat,
							apmat,
					  }
					: { ...empleado }
			);
			state.empleados = empleadosActualizados;
		});
		//Eliminar empleados
		builder.addCase(eliminar.fulfilled, (state, action) => {
			state.empleados = state.empleados.filter(
				empleado => empleado._id !== action.payload
			);
		});
	},
});

export const { empleado } = empleadosSlice.actions;

export default empleadosSlice.reducer;
