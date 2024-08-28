import express from "express";
import { accountsController } from './controllers/accounts-controller.js';
import { dashboardController } from "./controllers/dashboard-controller.js";
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { liveController } from "./controllers/live-controller.js";

export const router = express.Router();



router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/dashboard/deleteStation/:id", dashboardController.deleteStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addReport", stationController.addReport);
router.get("/about", aboutController.index);
router.get("/station/:stationId/deleteReport/:reportId", stationController.deleteReport);
router.get("/station/:id/edit", stationController.editStationPage);
router.post("/station/:id/update", stationController.updateStation);
router.get("/profile", accountsController.profile);
router.post("/updateProfile", accountsController.updateProfile);

//make sure these work later
router.get("/live", liveController.index); // To view live reports
router.post("/live/addreport", liveController.addReport); // To add a new report
router.get("/live/deleteReport/:id", liveController.deleteReport); // To delete a report