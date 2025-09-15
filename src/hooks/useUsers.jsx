
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [] , isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return [users, loading, refetch];
};

export default useUsers;