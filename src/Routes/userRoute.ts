import express from "express";

import userController from "../Controllers/userController";
import mwAppointment from "../Middlewares/mwApointment";

const router = express.Router();

router.post("/createUser", userController.createUser);
router.post("/createAppointment", mwAppointment.checkStatus, userController.createAppointment);
router.get("/getAllUsers", userController.getAllusers);
router.put("/updateUser", userController.updateUser);

export default router;
