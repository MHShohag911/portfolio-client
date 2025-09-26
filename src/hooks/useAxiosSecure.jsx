import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://portfolio-server-woad-sigma.vercel.app',
    // baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();

    // Request interceptor
    axiosSecure.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response Interceptor
    axiosSecure.interceptors.response.use(
        (response) => response,
        async(error) => {
            const status = error?.response?.status;
            console.log('Status Error in the interceptors', status);

            if(status === 401 || status === 403){
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error);
        }
    )
    return axiosSecure;
};

export default useAxiosSecure;

/* 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
//   baseURL: "https://portfolio-server-woad-sigma.vercel.app",
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

// ✅ Interceptors should be outside hook so they're registered once
axiosSecure.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;
    console.log("Status Error in the interceptors", status);

    if (status === 401 || status === 403) {
      // handle later from hook
      if (axiosSecure._logoutHandler) {
        await axiosSecure._logoutHandler();
      }
    }
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // ✅ attach logout handler dynamically
  axiosSecure._logoutHandler = async () => {
    await logOut();
    navigate("/login");
  };

  return axiosSecure;
};

export default useAxiosSecure; */
