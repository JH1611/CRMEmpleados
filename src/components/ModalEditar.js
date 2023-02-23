import { editar } from "@/redux/services/empleadosService";
import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalEditar = ({ open, setOpen }) => {
	const empleado = useSelector(state => state.empleados.editando);
	const [nombre, setNombre] = useState("");
	const [appat, setApat] = useState("");
	const [apmat, setApmat] = useState("");

	useEffect(() => {
		if (empleado.nombre) {
			setNombre(empleado.nombre);
			setApat(empleado.appat);
			setApmat(empleado.apmat);
		}
	}, [empleado]);
	const dispatch = useDispatch();
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
				<h2
					id="parent-modal-title"
					style={{ textAlign: "center", margin: "0" }}
				>
					Editar empleado:
				</h2>
				<form style={{ width: "80%" }}>
					<div style={{ marginTop: "1rem" }}>
						<label style={{ display: "block" }}>Nombre</label>
						<input
							type="text"
							value={nombre}
							onChange={e => setNombre(e.target.value)}
							style={{
								width: "100%",
								height: "3rem",
								backgroundColor: "var(--bgGris)",
								border: "none",
								borderRadius: ".5rem",
								padding: "1rem",
							}}
						/>
					</div>
					<div style={{ marginTop: "1rem" }}>
						<label style={{ display: "block" }}>
							Apellido Paterno
						</label>
						<input
							type="text"
							value={appat}
							onChange={e => setApat(e.target.value)}
							style={{
								width: "100%",
								height: "3rem",
								backgroundColor: "var(--bgGris)",
								border: "none",
								borderRadius: ".5rem",
								padding: "1rem",
							}}
						/>
					</div>
					<div style={{ marginTop: "1rem" }}>
						<label style={{ display: "block" }}>
							Apellido Materno
						</label>
						<input
							type="text"
							value={apmat}
							onChange={e => setApmat(e.target.value)}
							style={{
								width: "100%",
								height: "3rem",
								backgroundColor: "var(--bgGris)",
								border: "none",
								borderRadius: ".5rem",
								padding: "1rem",
							}}
						/>
					</div>
				</form>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "80%",
						marginTop: "1rem",
					}}
				>
					<Button
						variant="contained"
						onClick={() => {
							dispatch(
								editar({
									id: empleado._id,
									empleado: { nombre, appat, apmat },
								})
							);
							setOpen(false);
						}}
						sx={{ fontSize: "1.5rem" }}
					>
						Actualizar
					</Button>
					<Button
						variant="outlined"
						onClick={() => setOpen(false)}
						sx={{ fontSize: "1.5rem" }}
					>
						Cancelar
					</Button>
				</div>
			</Box>
		</Modal>
	);
};
export default ModalEditar;
