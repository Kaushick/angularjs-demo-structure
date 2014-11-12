'use strict';

var baseUrl = 'http://127.0.0.1:8000/';

module.exports = {
  getBaseUrl: function() {
    return baseUrl;
  },
  login: baseUrl + 'api/login',
  addEmployee: baseUrl + 'api/user/add',
  updateMyProfile: baseUrl + 'api/user/update_own',
  forgotPassword: baseUrl + 'api/attender/forgot-password',
  resetPassword: baseUrl + 'api/attender/reset-password',
  changePassword: baseUrl + 'api/user/change_password',
  addSponsorCategory: baseUrl + 'api/sponser-category/add',
  getSingleSponsorCategory: baseUrl + 'api/sponser-category/',
  getAllSponsorCategories: baseUrl + 'api/sponser-categories',
  getAllSponsors: baseUrl + 'api/sponsers',
  addSponsor: baseUrl + 'api/sponser/add-sponser',
  getSingleSponsor: baseUrl + 'api/sponser/',
  applyForLeave: baseUrl + 'api/leave/apply',
  leaveRequestsForOwn: baseUrl + 'api/leave/details',
  leaveRequestsForOthers: baseUrl + 'api/leave/view_all',
  getSingleEmployee: baseUrl + 'api/user/view_one',
  getOwnProfile: baseUrl + 'api/user/view',
  designationAddEdit: baseUrl + 'api/designation/add',
  uploadAttendanceCSV: baseUrl + 'api/attendance/upload_csv',
  addHoliday: baseUrl + 'api/holiday/add',
  viewHolidays: baseUrl + 'api/holiday/view',
  editHoliday: baseUrl + 'api/holiday/edit',
  removeHoliday: baseUrl + 'api/holiday/remove',
  getSingleApplicationDetails: baseUrl + 'api/leave/specific_details',
  approveOrRejectApplication: baseUrl + 'api/leave/manage',
  viewAllAttendance: baseUrl + 'api/attendance/view_all',
  viewOwnAttendance: baseUrl + 'api/attendance/view',
  addAttendance: baseUrl + 'api/attendance/add',
  editAttendance: baseUrl + 'api/attendance/edit',
  editLeaveAccount: baseUrl + 'api/leave/edit',
  blockUser: baseUrl + 'api/user/block',
  logout: baseUrl + 'api/logout',
  // Write your apis fuctions here
};
