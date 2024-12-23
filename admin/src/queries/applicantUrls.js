

import request from "utils/request";

const getApplicants = async ({ page, perPage, sortBy, order, search, careerId, qualification, status }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
    careerId,
    qualification,
    status,
  }).toString();

  return request(`/job-applications?${queryParams}`, "GET");
};

const getCareers = async () => {
  return request(`/careers`, "GET");
};

const editApplicant = async ({ applicationId, newStatus }) =>
  request(`/job-applications/${applicationId}`, "PUT", { newStatus });

const downloadAllCVs = async () =>
  request(`/job-applications/download-all-cvs`, "GET", null, {
    responseType: "blob",
  });

export { getApplicants, getCareers, editApplicant, downloadAllCVs };
