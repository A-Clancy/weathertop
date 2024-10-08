import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { reportStore } from "./report-store.js";

const db = initStore("stations");

export const stationStore = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },

  async getStationsByUserId(userid) {
    await db.read();
    return db.data.stations.filter((station) => station.userid === userid);
  },

  async addStation(station) {
    await db.read();
    station._id = v4();
    db.data.stations.push(station);
    await db.write();
    return station;
  },

  async getStationById(id) {
    await db.read();
    const list = db.data.stations.find((station) => station._id === id);
    list.reports = await reportStore.getReportsByStationId(list._id);
    return list;
  },

  async updateStation(id, updatedStation) {
    await db.read();
    const station = db.data.stations.find((station) => station._id === id);
    if (station) {
      station.title = updatedStation.title || station.title;
      station.latitude = updatedStation.latitude || station.latitude;
      station.longitude = updatedStation.longitude || station.longitude;
      await db.write();
    }
  },

  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
    db.data.stations.splice(index, 1);
    await db.write();
  },

  async deleteAllstations() {
    db.data.stations = [];
    await db.write();
  },
};
