import express from "express";
import { routes } from "./routes";


const app = express()

app.use("/api", routes)

const SERVER_PORT = 4000

app.listen(SERVER_PORT,()=>{
    console.log(`Server is running on PORT : ${SERVER_PORT}`)
})