import empleadoModel from "@/mongo/empleadoModel";
import conectarDB from "@/utils/conectarDB";

export default async function handler(req, res) {
	await conectarDB();
	const { method } = req;
	switch (method) {
		case "GET":
			const empleados = await empleadoModel.find().select("-__v");
			return res.json(empleados);
		case "POST":
			const cantidad = await empleadoModel.find().select("-__v");
			if (cantidad.length >= 10) {
				return res
					.status(400)
					.json({ msg: "No puedes agregar más de 10 empleados." });
			}
			const nuevoEmpleado = await empleadoModel.create(
				JSON.parse(req.body)
			);
			const { _id, nombre, appat, apmat, fechaalta } = nuevoEmpleado;
			return res.json({
				_id,
				nombre,
				appat,
				apmat,
				fechaalta,
			});
		default:
			return res.status(405).json({ error: "Method not allowed" });
	}
}
