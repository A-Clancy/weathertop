import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import {reportAnalytics} from "../utils/analytics.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const reports = await reportStore.getReportsByStationId(station._id);
    
    const minTempReport = reportAnalytics.findMinTemp(reports);
    const minTemp = minTempReport ? minTempReport.temp : null;
    console.log("Minimum Temperature:", minTemp);
    
    const maxTempReport = reportAnalytics.findMaxTemp(reports);
    const maxTemp = maxTempReport ? maxTempReport.temp : null;
    console.log("Maximum temperature:", maxTemp);
    
    const minWindSpeedReport = reportAnalytics.findMinWindSpeed(reports);
    console.log("Minimum wind speed:", minWindSpeedReport);

    const maxWindSpeedReport = reportAnalytics.findMaxWindSpeed(reports);
    console.log("Report with the maximum wind speed:", maxWindSpeedReport);

    const minPressureReport = reportAnalytics.findMinPressure(reports);
    console.log("Report with the minimum pressure:", minPressureReport);

    const maxPressureReport = reportAnalytics.findMaxPressure(reports);
    console.log("Report with the maximum pressure:", maxPressureReport);
    
    
    
    const stationCards = {
      card1: { title: 'Station Name', imageSrc: 'https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/map-pin.png?v=1723842999382', imageAlt: 'Image 1', content: 'Content 1', time: '2024-08-16', formattedTime: 'Aug 16, 2024' },
      card2: { title: 'Weather', imageSrc: 'https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/gis--weather-map.svg?v=1723842998375', imageAlt: 'Image 2', content: 'Content 2', time: '2024-08-17', formattedTime: 'Aug 17, 2024' },
      card3: { title: 'Temperature', imageSrc: 'https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/oui--temperature.svg?v=1723842998686', imageAlt: 'Image 3', content: 'Content 3', time: '2024-08-18', formattedTime: 'Aug 18, 2024' },
      card4: { title: 'Wind', imageSrc: 'https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/wind.svg?v=1723843000196', imageAlt: 'Image 4', content: 'Content 4', time: '2024-08-19', formattedTime: 'Aug 19, 2024' },
      card5: { title: 'Pressure', imageSrc: 'https://cdn.glitch.global/f9c193fb-b447-434e-98d7-fd3d3da20615/pressure.png?v=1723842999905', imageAlt: 'Image 5', content: 'Content 5', time: '2024-08-20', formattedTime: 'Aug 20, 2024' }
    };
    
    const viewData = {
      title: "Station",
      station: station,
      stationCards: stationCards
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
    };
    console.log(`adding report ${newReport.title}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
  
    async deleteReport(request, response) {
    const stationId = request.params.stationId;
    const reportId = request.params.reportId;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
  
};
