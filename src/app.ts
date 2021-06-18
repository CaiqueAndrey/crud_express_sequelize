import { json, Router } from "express";
import cors from "cors";


const app = Router();

app.use(cors());
app.use(json());

app.use('/app', require('./app/')); //get routes do app

module.exports = app;