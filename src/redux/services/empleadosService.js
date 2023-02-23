import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAll = createAsyncThunk("empleados/findAll", async () => {
	const response = await fetch("/api/empleados");
	const data = await response.json();
	return data;
});

export const create = createAsyncThunk("empleados/create", async empleado => {
	const response = await fetch("/api/empleados", {
		method: "POST",
		body: JSON.stringify(empleado),
	});
	const data = await response.json();
	if (response.ok) {
		return data;
	}
});

export const eliminar = createAsyncThunk("empleados/delete", async id => {
	await fetch(`/api/empleados/${id}`, {
		method: "DELETE",
	});
	return id;
});

export const editar = createAsyncThunk(
	"empleados/editar",
	async ({ id, empleado }) => {
		await fetch(`/api/empleados/${id}`, {
			method: "PUT",
			body: JSON.stringify(empleado),
		});
		return { id, empleado };
	}
);
