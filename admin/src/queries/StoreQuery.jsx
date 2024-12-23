import { useMutation, useQuery, useQueryClient } from "react-query";
import {
    getBlogs,
    addBlogs,
    getBlogsById,
    editBlogs,
    deleteBlogs,
    getUsers,
    editUsers,
    getSubscribes,
    editSubscribes,
    updateBlogBanner
} from "./storeUrls";

const useGetBlogs = (data) => {
    return useQuery(["get_blogs", data], () => getBlogs(data), {
        staleTime: 3000,
        keepPreviousData: true,
        // refetchOnWindowFocus: false,
    });
};

const useGetBlogsById = (data) => {
    return useQuery(["get_blogs", data], () => getBlogsById(data), {
        staleTime: 3000,
        keepPreviousData: true,
        // refetchOnWindowFocus: false,
    });
};

const useAddBlogs = () => {
    const queryClient = useQueryClient();

    return useMutation((data) => addBlogs(data), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("get_blogs");
            return data;
        },
        onError: (data) => {
            return data;
        },
    });
};

const useEditBlogs = () => {
    const queryClient = useQueryClient();

    return useMutation((data) => editBlogs(data), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("get_blogs");
            return data;
        },
        onError: (data) => {
            return data;
        },
    });
};

const useDeleteBlogs = () => {
    const queryClient = useQueryClient();

    return useMutation((data) => deleteBlogs(data), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("get_blogs");
            return data;
        },
        onError: (data) => {
            return data;
        },
    });
};


const useGetUser = (params) => {
    return useQuery(["get_user", params], () => getUsers(params), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });
};
const useUpdateUserStatus = () => {

    const queryClient = useQueryClient();

    return useMutation(({ userId, newStatus }) => editUsers({ userId, newStatus }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("get_user");
            return data;
        },
        onError: (data) => {
            return data;
        },
    });
};
const useGetSubscribe = (params) => {
    return useQuery(["get_Subscribe", params], () => getSubscribes(params), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });
};
const useUpdateSubscribeStatus = () => {

    const queryClient = useQueryClient();

    return useMutation(({ SubscribeId, newStatus }) => editSubscribes({ SubscribeId, newStatus }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries("get_Subscribe");
            return data;
        },
        onError: (data) => {
            return data;
        },
    });
};

const useUpdateBlogBanner = () => {
    const queryClient = useQueryClient();
  
    return useMutation(({ blogId, banner }) => updateBlogBanner(blogId, banner), {
      onSuccess: () => {
        queryClient.invalidateQueries("get_blogs");
      },
      onError: (error) => {
        console.error("Error updating banner:", error);
      },
    });
  };
export {
    useUpdateBlogBanner,
    useGetUser,
    useUpdateUserStatus, 
    useGetSubscribe,
    useUpdateSubscribeStatus, 
    useGetBlogs,
    useGetBlogsById,
    useAddBlogs,
    useEditBlogs,
    useDeleteBlogs,
};
