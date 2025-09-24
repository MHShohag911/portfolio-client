
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSkills = () => {
    const axiosSecure = useAxiosSecure()
    const {data: skills = [] , isLoading: loading, refetch} = useQuery({
        queryKey: ['skills'],
        queryFn: async() => {
            const res = await axiosSecure.get('/skills');
            return res.data;
        }
    })
    return [skills, loading, refetch];
};

export default useSkills;