import ModalEditar from "@/components/ModalEditar";
import ModalEliminar from "@/components/ModalEliminar";
import MainLayout from "@/layout/MainLayout";
import { empleado } from "@/redux/reducers/empleadosReducer";
import formatearFecha from "@/utils/formatearFecha";
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
	const [modalEliminar, setModalEliminar] = useState(false);
	const [modalEditar, setModalEditar] = useState(false);
	const state = useSelector(state => state.empleados);
	const dispatch = useDispatch();

	return (
		<MainLayout
			titulo={"Empleados"}
			descripcion="administra empleados, empleados crm"
		>
			<h1
				style={{
					textAlign: "center",
					textTransform: "uppercase",
					fontWeight: "900",
				}}
			>
				Empleados
			</h1>
			<TableContainer
				sx={{ maxHeight: "80%" }}
				style={{ overflowY: "scroll" }}
			>
				<Table
					sx={{ minWidth: 650 }}
					size="medium"
					stickyHeader
				>
					<TableHead>
						<TableRow>
							<TableCell
								style={{ fontSize: "1.5rem", fontWeight: 700 }}
								align="center"
							>
								Nombre
							</TableCell>
							<TableCell
								style={{ fontSize: "1.5rem", fontWeight: 700 }}
								align="center"
							>
								Apellido Paterno
							</TableCell>
							<TableCell
								style={{ fontSize: "1.5rem", fontWeight: 700 }}
								align="center"
							>
								Apellido Materno
							</TableCell>
							<TableCell
								style={{ fontSize: "1.5rem", fontWeight: 700 }}
								align="center"
							>
								Fecha Alta
							</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{state?.empleados?.map(row => (
							<TableRow
								key={row._id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell
									style={{ fontSize: "1.5rem" }}
									align="center"
								>
									{row.nombre}
								</TableCell>
								<TableCell
									style={{ fontSize: "1.5rem" }}
									align="center"
								>
									{row.appat}
								</TableCell>
								<TableCell
									style={{ fontSize: "1.5rem" }}
									align="center"
								>
									{row.apmat}
								</TableCell>
								<TableCell
									style={{ fontSize: "1.5rem" }}
									align="center"
								>
									{formatearFecha(row.fechaalta)}
								</TableCell>
								<TableCell>
									<Button
										variant="contained"
										style={{
											fontSize: "1rem",
											padding: ".2rem",
											fontWeight: 700,
										}}
										onClick={() => {
											dispatch(empleado(row));
											setModalEditar(true);
										}}
									>
										Editar
									</Button>
									<Button
										variant="contained"
										color="error"
										style={{
											fontSize: "1rem",
											padding: ".2rem",
											fontWeight: 700,
										}}
										onClick={() => {
											dispatch(empleado(row));
											setModalEliminar(true);
										}}
									>
										Eliminar
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ModalEliminar
				open={modalEliminar}
				setOpen={setModalEliminar}
			/>
			<ModalEditar
				open={modalEditar}
				setOpen={setModalEditar}
			/>
		</MainLayout>
	);
}
