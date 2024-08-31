import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { reportAnalytics } from "../utils/analytics.js";
import { getIconUrl, getWeatherDescription } from "../utils/weather-mapping.js";
import dayjs from "dayjs";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const reports = await reportStore.getReportsByStationId(station._id);

    // Format timestamps
    reports.forEach((report) => {
      if (report.timestamp) {
        report.formattedTimestamp = dayjs(report.timestamp).format(
          "DD/MM/YYYY HH:mm"
        );
      } else {
        report.formattedTimestamp = "Missgin"; // Troubleshoot missing timestamp
      }
    });

    // Get the latest weather report
    const mostRecentReport =
      reports.length > 0 ? reports[reports.length - 1] : null;

    // Get the latest weather code
    const weatherCode = mostRecentReport ? mostRecentReport.code : null;

    // Add the corresonding image code to the end of the URL.
    const weatherIconUrl = getIconUrl(weatherCode);
    const weatherDescription = getWeatherDescription(weatherCode);

    //Get Max and Min reports
    //Temperature
    const minTempReport = reportAnalytics.findMinTemp(reports);
    const minTemp = minTempReport ? minTempReport.temp : null;
    console.log("Minimum Temperature:", minTemp);

    const maxTempReport = reportAnalytics.findMaxTemp(reports);
    const maxTemp = maxTempReport ? maxTempReport.temp : null;
    console.log("Maximum temperature:", maxTemp);

    //Wind Speed
    const minWindSpeedReport = reportAnalytics.findMinWindSpeed(reports);
    const minWindSpeed = minWindSpeedReport
      ? minWindSpeedReport.windSpeed
      : null;
    console.log("Minimum wind speed:", minWindSpeed);

    const maxWindSpeedReport = reportAnalytics.findMaxWindSpeed(reports);
    const maxWindSpeed = maxWindSpeedReport
      ? maxWindSpeedReport.windSpeed
      : null;
    console.log("Report with the maximum wind speed:", maxWindSpeed);

    //Pressure
    const minPressureReport = reportAnalytics.findMinPressure(reports);
    const minPressure = minPressureReport ? minPressureReport.pressure : null;
    console.log("Report with the minimum pressure:", minPressure);

    const maxPressureReport = reportAnalytics.findMaxPressure(reports);
    const maxPressure = maxPressureReport ? maxPressureReport.pressure : null;
    console.log("Report with the maximum pressure:", maxPressure);

    const stationCards = {
      card1: {
        title: "Station Name",
        imageSrc:
          "https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/map-pin.png?v=1723842999382",
        imageAlt: "Image 1",
        content: station.title,
        time: "2024-08-16",
        formattedTime: "Aug 16, 2024",
      },
      card2: {
        title: "Weather",
        imageSrc: weatherIconUrl,
        imageAlt: weatherDescription,
        content: weatherDescription,
      },
      card3: {
        title: "Temperature",
        imageSrc:
          "https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/oui--temperature.svg?v=1723842998686",
        imageAlt: "Image 3",
        content: `Min Temp: ${minTemp}°C, Max Temp: ${maxTemp}°C`,
      },
      card4: {
        title: "Wind",
        imageSrc:
          "https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/wind.svg?v=1723843000196",
        imageAlt: "Image 4",
        content: `Min Wind Speed: ${minWindSpeed} km/h, Max Wind Speed: ${maxWindSpeed} km/h`,
      },
      card5: {
        title: "Pressure",
        imageSrc:
          "https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/pressure.png?v=1723842999905",
        imageAlt: "Image 5",
        content: `Min Pressure: ${minPressure} hPa, Max Pressure: ${maxPressure} hPa`,
      },
    };

    const viewData = {
      title: "Station",
      station: station,
      stationCards: stationCards,
    };
    response.render("station-view", viewData);
  },

  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReport = {
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
      timestamp: request.body.timestamp,
    };
    console.log(
      `Adding report with code: ${newReport.code}, Timestamp: ${newReport.timestamp}`
    );
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },

  async editStationPage(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const viewData = {
      title: "Edit Station Details",
      station: station,
    };
    response.render("edit-station", viewData);
  },

  async updateStation(request, response) {
    const stationId = request.params.id;
    const updatedStation = {
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };
    await stationStore.updateStation(stationId, updatedStation);
    response.redirect("/station/" + stationId);
  },

  async deleteReport(request, response) {
    const stationId = request.params.stationId;
    const reportId = request.params.reportId;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
};
