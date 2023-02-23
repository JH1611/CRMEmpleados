import mongoose from "mongoose"
export default async function conectarDB() {
	if (mongoose.connection.readyState === 1) return
	mongoose.set("strictQuery", false)
	await mongoose.connect(process.env.MONGO_URI)
}
