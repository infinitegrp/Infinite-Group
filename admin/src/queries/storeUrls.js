import request from "utils/request";

const addBlogs = async (data) => request(`/blogs`, 'POST', data)
const editBlogs = async (data) => request(`/blogs`, 'PATCH', data)
const deleteBlogs = async (data) => request(`/blogs/${data?._id}`, 'DELETE', data)
const getBlogs = async (data) => request(`/blogs?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBlogsById = async (data) => request(`/blogs/${data?.id}`, 'GET', data)

const updateBlogBanner = async (blogId, banner) => {
  return request(`/blogs/${blogId}/setBanner`, 'PUT', { banner });
};





const editUsers = async ({ userId, newStatus }) => request('/contact/update-status', 'PUT', {userId, newStatus})
const getUsers = async ({ page, perPage, sortBy, order, search , status }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
    status
  }).toString();

  const response = await request(`/contact/getAllContacts?${queryParams}`, 'GET');
  return response;
};

const editSubscribes = async ({ SubscribeId, newStatus }) => request('/news-letter/update-status', 'PUT', {SubscribeId, newStatus})
const getSubscribes = async ({ page, perPage, sortBy, order, search , status }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
    status
  }).toString();

  const response = await request(`/news-letter/getAllSubscribes?${queryParams}`, 'GET');
  return response;
};

export { 
    addBlogs,
    editBlogs,
    deleteBlogs,
    getBlogs,
    getBlogsById,
    getUsers,
    editUsers,
    getSubscribes,
    editSubscribes,
    updateBlogBanner
  };
