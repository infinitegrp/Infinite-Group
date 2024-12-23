import request from "./axiosInstance";
import { Blog, ContactData } from "./interface";

const buildQueryParams = (data: Record<string, number | string>) =>
  new URLSearchParams(
    Object.entries(data).reduce((acc, [key, value]) => {
      acc[key] = value.toString();
      return acc;
    }, {} as Record<string, string>)
  ).toString();

const getCareers = async (data: { page: number; perPage: number }) =>
  request({
    endpoint: `/careers?${buildQueryParams(data)}`,
    method: "GET",
  });

const applyJob = async (data: FormData) =>
  request({
    endpoint: `/job-applications`,
    method: "POST",
    data,
  });

const getBlogs = async (data: any): Promise<{ data: { data: Blog[] } }> =>
  request({
    endpoint: `/blogs?${buildQueryParams(data)}`,
    method: "GET",
  });

const getBlogsById = async (id: string): Promise<{ data: { data: Blog } }> =>
  request({
    endpoint: `/blogs/${id}`,
    method: "GET",
  });

const sendInquiry = async (data: ContactData) =>
  request({ endpoint: `/contact`, method: "POST", data });

const subscribe = async (data: { email: string }) =>
  request({ endpoint: `/news-letter`, method: "POST", data });

export { getCareers, applyJob, getBlogs, getBlogsById, sendInquiry, subscribe };
