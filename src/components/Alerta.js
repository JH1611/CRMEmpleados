const Alerta = ({ alerta }) => {
	return (
		<div className={`${alerta?.tipo ? "success" : "error"}`}>{alerta.msg}</div>
	)
}
export default Alerta
