import request from "utils/request";

const addCareers = async (data) => request(`/careers`, "POST", data);
const updateCareers = async (data) => request(`/careers`, "PATCH", data);
const deleteCareers = async (data) => request(`/careers/${data?._id}`, "DELETE", data);
const getCareersById = async (data) => request(`/careers/${data?.id}`, "GET", data);

const getCareers = async ({ page, perPage, sortBy, order, search }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
    isAdmin: true,
  }).toString();

  const response = await request(`/careers/adminCareers?${queryParams}`, "GET");
  return response;
};

export { addCareers, updateCareers, deleteCareers, getCareers, getCareersById };
