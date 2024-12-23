import { useQuery } from "react-query";
import { getCareers } from "./api";

const useGetCareers = (data: { page: number; perPage: number }) => {
  return useQuery(["get_careers", data], () => getCareers(data), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

export { useGetCareers };
