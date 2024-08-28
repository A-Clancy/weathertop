export const liveStore = {
  reports: [],

  addReport(report) {
    this.reports.push(report);
  },

  getReports() {
    return this.reports;
  },
  
  getReportById(id) {
    return this.reports.find(report => report.id === id);
  },

  deleteReport(id) {
    this.reports = this.reports.filter(report => report.id !== id);
  }
};
