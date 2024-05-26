import { Link } from "react-router-dom";


const ErrorPage = () => {
   return (
      <div className="flex justify-center items-center h-screen">
         <div>
            <h2 className="text-3xl font-bold my-4">Oops!!!</h2>
            <Link to="/" className="relative inline-block px-4 py-2 font-medium group">
               <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
               <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
               <span className="relative text-secondary group-hover:text-white">Go Back</span>
            </Link>
         </div>
      </div>
   );
};

export default ErrorPage;