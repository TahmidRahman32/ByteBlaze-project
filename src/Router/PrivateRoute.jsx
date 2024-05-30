import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClockLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
   const { user,loading } = useContext(AuthContext);
   const location = useLocation();
   console.log(location);
   

   if(loading){
      return (
         <div className="flex justify-center items-center min-h-[calc(100vh-133px)]">
            <ClockLoader  size={100} color="#36d7b7" />
         </div>
      );
   }
   if(user){
      return children;
   }
   return <Navigate to={"/logIn"} ></Navigate>;
};

export default PrivateRoute;