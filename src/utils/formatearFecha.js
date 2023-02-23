export default function formatearFecha(fecha) {
	return new Date(fecha).toLocaleDateString("es-ES", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
}
