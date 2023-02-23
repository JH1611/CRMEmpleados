import empleadoModel from "@/mongo/empleadoModel";
import conectarDB from "@/utils/conectarDB";

export default async function handler(req, res) {
	await conectarDB();
	const { method } = req;
	switch (method) {
		case "DELETE":
			await empleadoModel.deleteOne({ _id: req.query.id });
			res.status(202).send("Eliminado");
			break;
		case "PUT":
			await empleadoModel.findByIdAndUpdate(
				req.query.id,
				JSON.parse(req.body)
			);
			res.status(202).send("Actualizado");
			break;
		default:
			return res.status(405).json({ error: "Method not allowed" });
	}
}
