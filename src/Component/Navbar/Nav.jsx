import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Router/Provider/AuthProvider";

const Nav = () => {
   const [theme, setTheme] = useState("light");
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () =>{
      logOut().then(result =>{
         console.log(result.user);
      })
      .catch(error =>{
         console.log(error);
      })
   }
  

   const handleThemeToggle = (e) => {
      if (e.target.checked) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };
   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);

   return (
      <div className="navbar bg-base-100 fixed shadow-lg z-10">
         <div className="flex-1">
            <a className="btn btn-ghost gap-0 text-secondary font-bold md:text-2xl">
               Byte <span className="text-primary">Blaze</span>
            </a>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-3 items-center">
               <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-primary underline font-bold" : "font-bold")}>
                  Home
               </NavLink>
               <NavLink to={"/blogs"} className={({ isActive }) => (isActive ? "text-primary underline font-bold" : "font-bold")}>
                  Blogs
               </NavLink>
               <NavLink to={"/bookmark"} className={({ isActive }) => (isActive ? "text-primary underline font-bold" : "font-bold")}>
                  BookMarks
               </NavLink>
               <div>
                  {user ? (
                     <NavLink to={"/logIn"} onClick={handleLogOut} className={({ isActive }) => (isActive ? "text-primary underline font-bold" : "font-bold")}>
                        LogOut
                     </NavLink>
                  ) : (
                     <NavLink to={"/logIn"} className={({ isActive }) => (isActive ? "text-primary underline font-bold" : "font-bold")}>
                        LogIn
                     </NavLink>
                  )}
               </div>
               <NavLink to={"/signUp"} className={({ isActive }) => (isActive ? "text-primary underline font-bold" : "font-bold")}>
                  SignUp
               </NavLink>

               <li>
                  <label className="cursor-pointer grid place-items-center">
                     <input onChange={handleThemeToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                     <svg
                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                     </svg>
                     <svg
                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                     </svg>
                  </label>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Nav;
