import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection
        connection.on("connected", () => {
            console.log("MongoDB has Connected Successfully")
        })

        connection.on("error",(err) => {
            console.log('MonogDB connection error' + err);
            process.exit();
        })
    } catch (error) {
        console.log(error);
    }
}