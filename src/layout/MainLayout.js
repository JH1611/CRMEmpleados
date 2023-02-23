import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findAll } from "@/redux/services/empleadosService";

const MainLayout = ({ children, titulo, descripcion }) => {
	const router = useRouter();

	const state = useSelector(state => state.empleados);
	const dispatch = useDispatch();
	useEffect(() => {
		if (state?.empleados.length === 0) {
			dispatch(findAll());
		}
	}, []);
	return (
		<>
			<Head>
				<title>{`CRM Empleados - ${titulo}`}</title>
				<meta
					name="description"
					content={descripcion}
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<section className={styles.content}>
				<aside className={styles.sidebar}>
					<h1 className={styles.heading}>CRM-EMPLEADOS</h1>
					<nav className={styles.links}>
						<Link
							href={"/"}
							className={`${styles.link} ${
								router.pathname === "/" ? styles.active : ""
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-users"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								></path>
								<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
								<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								<path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
							</svg>
							Empleados
						</Link>
						<Link
							href={"/nuevo"}
							className={`${styles.link} ${
								router.pathname === "/nuevo"
									? styles.active
									: ""
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-user-plus"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								></path>
								<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
								<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
								<path d="M16 11h6m-3 -3v6"></path>
							</svg>
							Nuevo Empleado
						</Link>
					</nav>
				</aside>
				<main className={styles.main}>{children}</main>
			</section>
		</>
	);
};
export default MainLayout;
