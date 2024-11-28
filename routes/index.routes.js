import ejemplo from "./ejemplo.js"; 
import { Router } from "express";
import empleado from "./Empleados.routes.js";

const indexRouter = Router();

indexRouter.use('/ejemplo', ejemplo);
indexRouter.use('/empleados', empleado)

export default indexRouter;
