import { Outlet } from "react-router-dom";
import Nav from "../../Component/Navbar/Nav";
import Footer from "../../Pages/Footer/Footer";
import  { Toaster } from "react-hot-toast";

const Root = () => {
   return (
      <div>
         <div className="h-[78px]">
            <Nav></Nav>
         </div>
         <div className="min-h-[calc(100vh-133px)]">
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
         <Toaster />
      </div>
   );
};

export default Root;