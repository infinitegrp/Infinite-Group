import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCareers,
  deleteCareers,
  getCareersById,
  getCareers,
  updateCareers,
} from "./productUrls";

const useGetCareers = (params) => {
  return useQuery(["get_products", params], () => getCareers(params), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
const useGetCareersById = (data) => {
  return useQuery(["get_products", data], () => getCareersById(data), {
    // staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
const useAddCareers = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => addCareers(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_products");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};
const useUpdateCareers = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => updateCareers(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_products");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};
const useDeleteCareers = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => deleteCareers(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("get_products");
      return data;
    },
    onError: (data) => {
      return data;
    },
  });
};


export {
  useGetCareers,
  useGetCareersById,
  useAddCareers,
  useUpdateCareers,
  useDeleteCareers,
  
};
