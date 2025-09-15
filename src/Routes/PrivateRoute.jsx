import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className='mx-auto w-1/2 my-40'><Spinner className='mx-auto text-white h-8 w-8' /></div>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" />
};

export default PrivateRoute;