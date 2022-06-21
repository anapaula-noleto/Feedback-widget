import express from "express";
import cors from "cors"
import { routes } from "./routes";

const app = express();

// cors permite que apenas endereços especificados acessem o backend da
// aplicação
app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log("Server started on port 3333");
})