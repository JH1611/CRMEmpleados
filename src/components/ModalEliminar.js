import { eliminar } from "@/redux/services/empleadosService"
import { Button, Modal } from "@mui/material"
import { Box } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import AlertIcon from "./AlertIcon"

const ModalEliminar = ({ open, setOpen }) => {
	const empleado = useSelector(state => state.empleados.editando)
	const dispatch = useDispatch()

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#FFF",
					padding: "1rem",
					width: 400,
					borderRadius: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<AlertIcon />
				<h2
					id="parent-modal-title"
					style={{ textAlign: "center", margin: "0" }}
				>
					Eliminando a:
				</h2>
				<p
					style={{ fontSize: "2rem", margin: 0 }}
				>{`${empleado?.nombre} ${empleado?.appat} ${empleado?.apmat}`}</p>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "80%",
					}}
				>
					<Button
						variant="contained"
						color="error"
						onClick={() => {
							dispatch(eliminar(empleado._id))
							setOpen(false)
						}}
						sx={{ fontSize: "1.5rem" }}
					>
						Confirmar
					</Button>
					<Button
						variant="outlined"
						color="error"
						onClick={() => setOpen(false)}
						sx={{ fontSize: "1.5rem" }}
					>
						Cancelar
					</Button>
				</div>
			</Box>
		</Modal>
	)
}
export default ModalEliminar
