import { liveStore } from "../models/live-store.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&units=metric&appid=c1d32b9ca2301f2be81a55357932fb0c`;

export const liveController = {
  index(request, response) {
    const viewData = {
      title: "Live Weather Readings",
      reports: liveStore.getReports(),
    };
    response.render("live-view", viewData);
  },

  //need to figure out how to connect this to the API later.
  async addReport(request, response) {
    // Is this working???
    const result = await axios.get(weatherRequestUrl);
    const weatherData = result.data;

    const newReport = {
      id: uuidv4(),
      temperature: weatherData.main.temp,
      windSpeed: weatherData.wind.speed,
      pressure: weatherData.main.pressure,
      description: weatherData.weather[0].description,
      timestamp: new Date(),
    };

    liveStore.addReport(newReport);
    response.redirect("/live");
  },

  deleteReport(request, response) {
    const reportId = request.params.id;
    liveStore.deleteReport(reportId);
    response.redirect("/live");
  },
};
