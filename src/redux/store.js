import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counterReducer"
import empleadosReducer from "./reducers/empleadosReducer"

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		empleados: empleadosReducer,
	},
})
