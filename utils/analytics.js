export const reportAnalytics = {
  //Find min temperature
  findMinTemp(reports) {
    let minTempReport = null;
    if (reports.length > 0) {
      minTempReport = reports[0];
      let minTemp = parseFloat(reports[0].temp);

      for (let i = 1; i < reports.length; i++) {
        const currentTemp = parseFloat(reports[i].temp); // Convert temp to number

        if (!isNaN(currentTemp) && currentTemp < minTemp) {
          minTempReport = reports[i];
          minTemp = currentTemp;
        }
      }
    }
    return minTempReport;
  },

  //Find min temperature
  findMaxTemp(reports) {
    let maxTempReport = null;

    if (reports.length > 0) {
      maxTempReport = reports[0];
      let maxTemp = parseFloat(reports[0].temp);

      for (let i = 1; i < reports.length; i++) {
        const currentTemp = parseFloat(reports[i].temp);

        if (!isNaN(currentTemp) && currentTemp > maxTemp) {
          maxTempReport = reports[i];
          maxTemp = currentTemp;
        }
      }
    }
    return maxTempReport;
  },

  //Wind Speed
  //Mininimum wind speed
  findMinWindSpeed(reports) {
    let minWindReport = null;

    if (reports.length > 0) {
      minWindReport = reports[0];
      let minWindSpeed = parseFloat(reports[0].windSpeed);

      for (let i = 1; i < reports.length; i++) {
        const currentWindSpeed = parseFloat(reports[i].windSpeed);

        if (!isNaN(currentWindSpeed) && currentWindSpeed < minWindSpeed) {
          minWindReport = reports[i];
          minWindSpeed = currentWindSpeed;
        }
      }
    }
    return minWindReport;
  },

  //max wind speed
  findMaxWindSpeed(reports) {
    let maxWindReport = null;

    if (reports.length > 0) {
      maxWindReport = reports[0];
      let maxWindSpeed = parseFloat(reports[0].windSpeed);

      for (let i = 1; i < reports.length; i++) {
        const currentWindSpeed = parseFloat(reports[i].windSpeed);

        if (!isNaN(currentWindSpeed) && currentWindSpeed > maxWindSpeed) {
          maxWindReport = reports[i];
          maxWindSpeed = currentWindSpeed;
        }
      }
    }
    return maxWindReport;
  },

  //pressure
  //min pressure
  findMinPressure(reports) {
    let minPressureReport = null;

    if (reports.length > 0) {
      minPressureReport = reports[0];
      let minPressure = parseFloat(reports[0].pressure);

      for (let i = 1; i < reports.length; i++) {
        const currentPressure = parseFloat(reports[i].pressure);

        if (!isNaN(currentPressure) && currentPressure < minPressure) {
          minPressureReport = reports[i];
          minPressure = currentPressure;
        }
      }
    }
    return minPressureReport;
  },

  //max pressure
  findMaxPressure(reports) {
    let maxPressureReport = null;

    if (reports.length > 0) {
      maxPressureReport = reports[0];
      let maxPressure = parseFloat(reports[0].pressure);

      for (let i = 1; i < reports.length; i++) {
        const currentPressure = parseFloat(reports[i].pressure);

        if (!isNaN(currentPressure) && currentPressure > maxPressure) {
          maxPressureReport = reports[i];
          maxPressure = currentPressure;
        }
      }
    }
    return maxPressureReport;
  },
};
