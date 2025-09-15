import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axiosPublic";

const useProjectsLinks = () => {
    const axiosPublic = useAxiosPublic();

    const {data: projectsLinks = [] , isLoading: loading, refetch} = useQuery({
        queryKey: ['projects-links'],
        queryFn: async() => {
            const res = await axiosPublic.get('/projects-links');
            return res.data;
        }
    })
    return [projectsLinks, loading, refetch];
};

export default useProjectsLinks;