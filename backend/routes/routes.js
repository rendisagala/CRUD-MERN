import express from "express";
import { controller } from "../controller/controller.js";

const router = express.Router();

router.route("/user").get(controller.getUser);
router.route("/user").post(controller.saveUser);
router.route("/user/:id").get(controller.getUserById);
router.route("/user/:id").patch(controller.updateUser);
router.route("/user/:id").delete(controller.deleteUser);

export default router;
