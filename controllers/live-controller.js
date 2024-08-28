import { liveStore } from "../models/live-store.js";
import { v4 as uuidv4 } from "uuid";

export const liveController = {
  index(request, response) {
    const viewData = {
      title: "Live Weather Readings",
      reports: liveStore.getReports(),
    };
    response.render("live-view", viewData);
  },

  //need to figure out how to connect this to the API later. 
  addReport(request, response) {
    const newReport = {
      id: uuidv4(),
      temperature: request.body.temperature, 
      windSpeed: request.body.windSpeed,
      pressure: request.body.pressure,
      description: request.body.description,
      timestamp: new Date(),
    };
    liveStore.addReport(newReport);
    response.redirect("/live"); 
  },

  deleteReport(request, response) {
    const reportId = request.params.id;
    liveStore.deleteReport(reportId);
    response.redirect("/live");
  }
};
