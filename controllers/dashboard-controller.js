import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    //stop "undefined" problems, verify user is logged in or send them to the home page.
    if (!loggedInUser) {
      console.log("User not logged in");
      response.redirect("/");
      return;
    }

    //get the stations for the logged in user
    let stations = await stationStore.getStationsByUserId(loggedInUser._id);

    //sort by title using js tool for comparing with respect to customs and conventions
    stations = stations.sort((a, b) => a.title.localeCompare(b.title));

    const viewData = {
      title: "Station Dashboard",
      stations: stations,
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    if (!loggedInUser) {
      console.log("User not logged in");
      response.redirect("/");
      return;
    }
    //create a new station. Data passed through from form on dashboard.
    const newStation = {
      title: request.body.title,
      userid: loggedInUser._id,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };
    console.log(
      `adding station ${newStation.title} at (${newStation.latitude}, ${newStation.longitude}) `
    );
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },

  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log("Deleting Station ${stationId}");
    await stationStore.deleteStationById(stationId);

    response.redirect("/dashboard");
  },
};
