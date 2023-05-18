import Express from "express";
import dotenv from "dotenv"
import apiRoutes from "./routes/index"
import {connectDB} from "./database"

// crear instancias de express
const app = Express();

// tarer puerto de las variables de entorno 
dotenv.config();

// conexion a la base de datos
connectDB()

// establecer el puetor en el cual se ejecuta el api
const port = process.env.PORT || 3200;

// establecer usos de express
app.use(Express.json());

// establecer la ruta a utiliozar en el api
app.use("/api", apiRoutes)

//ejecuccion del api
app.listen(port, () => console.log(`api is running in port ${port}`))