import React from 'react';
import useAxiosPublic from './axiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAboutMe = () => {
    const axiosPublic = useAxiosPublic();
    const {data: aboutMe = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['about-me'],
        queryFn: async () => {
            const res = await axiosPublic.get('/about-me');
            return res.data;
        }
    })
    return [aboutMe, loading, refetch]
};

export default useAboutMe;