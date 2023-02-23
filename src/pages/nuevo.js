import Alerta from "@/components/Alerta";
import MainLayout from "@/layout/MainLayout";
import { create } from "@/redux/services/empleadosService";

import styles from "@/styles/Nuevo.module.css";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Nuevo = () => {
	const [nombre, setNombre] = useState("");
	const [appat, setApPat] = useState("");
	const [apmat, setApMat] = useState("");
	const [alerta, setAlerta] = useState({});
	const firstRender = useRef(true);

	const state = useSelector(state => state.empleados);
	const dispatch = useDispatch();
	//handle submit
	const handleSubmit = async e => {
		e.preventDefault();
		if ([nombre, appat, apmat].includes("")) {
			setAlerta({ msg: "Debe ingresar todos los campos." });
			return;
		}
		if (/\d/.test(nombre) || /\d/.test(appat) || /\d/.test(apmat)) {
			setAlerta({ msg: "No puede contener números." });
			return;
		}
		firstRender.current = false;
		dispatch(create({ nombre, appat, apmat }));

		setNombre("");
		setApPat("");
		setApMat("");
	};

	useEffect(() => {
		if (firstRender.current) {
			return;
		}
		setAlerta({ tipo: "success", msg: "Empleado creado exitosamente." });
		setTimeout(() => {
			setAlerta({});
		}, 3000);
	}, [state.empleados]);

	return (
		<MainLayout
			titulo="Nuevo Empleado"
			descripcion="agregar nuevo empleado, nuevo empleado crm"
		>
			<h1
				style={{
					textAlign: "center",
					textTransform: "uppercase",
					fontWeight: "900",
				}}
			>
				Nuevo Empleado
			</h1>
			<div className={styles.contenedor}>
				{state.empleados.length > 9 && (
					<Alerta
						alerta={{
							msg: "Se alcanzó el limite de empleados (10), elimina alguno para agregar uno nuevo.",
						}}
					/>
				)}
				{alerta.msg && <Alerta alerta={alerta} />}
				<form
					onSubmit={handleSubmit}
					className={styles.form}
				>
					<div className="mb-5">
						<label className={styles.label}>Nombre</label>
						<input
							type="text"
							className={styles.input}
							placeholder="Nombre Empleado"
							value={nombre}
							onChange={e => setNombre(e.target.value)}
						/>
					</div>
					<div className="mb-5">
						<label className={styles.label}>Apellido Paterno</label>
						<input
							type="text"
							className={styles.input}
							placeholder="Apellido Paterno Empleado"
							value={appat}
							onChange={e => setApPat(e.target.value)}
						/>
					</div>
					<div className="mb-5">
						<label className={styles.label}>Apellido Materno</label>
						<input
							type="text"
							className={styles.input}
							placeholder="Apellido Materno Empleado"
							value={apmat}
							onChange={e => setApMat(e.target.value)}
						/>
					</div>
					<Button
						type="submit"
						variant="contained"
						style={{
							fontSize: "1rem",
							padding: ".5rem",
							fontWeight: "bold",
						}}
						disabled={state.empleados.length > 9 ? true : false}
					>
						{state.loading ? (
							<CircularProgress
								size={"2rem"}
								color="secondary"
							/>
						) : (
							"Agregar Empleado"
						)}
					</Button>
				</form>
			</div>
		</MainLayout>
	);
};
export default Nuevo;
