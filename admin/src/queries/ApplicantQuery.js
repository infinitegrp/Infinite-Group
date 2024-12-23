// import { useQuery, useMutation, useQueryClient } from "react-query";
// import { getApplicants, editApplicant } from "./applicantUrls";

// const useGetApplicants = (params) => {
//   return useQuery(["get_applicants", params], () => getApplicants(params), {
//     keepPreviousData: true,
//     refetchOnWindowFocus: false,
//   });
// };

// const useUpdateApplicantStatus = () => {
//   const queryClient = useQueryClient();

//   return useMutation(({ applicationId, newStatus }) => editApplicant({ applicationId, newStatus }), {
//     onSuccess: () => queryClient.invalidateQueries("get_applicants"),
//   });
// };

// export { useGetApplicants, useUpdateApplicantStatus };


import { useQuery, useMutation, useQueryClient } from "react-query";
import { getApplicants, editApplicant, downloadAllCVs, getCareers } from "./applicantUrls";

const useGetApplicants = (params) => {
  return useQuery(["get_applicants", params], () => getApplicants(params), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

const useGetCareers = () => {
  return useQuery("get_careers", getCareers, {
    refetchOnWindowFocus: false,
  });
};

const useUpdateApplicantStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(({ applicationId, newStatus }) => editApplicant({ applicationId, newStatus }), {
    onSuccess: () => queryClient.invalidateQueries("get_applicants"),
  });
};

const useDownloadAllCVs = () => {
  return useMutation(downloadAllCVs);
};

export { useGetApplicants, useUpdateApplicantStatus, useDownloadAllCVs, useGetCareers };
