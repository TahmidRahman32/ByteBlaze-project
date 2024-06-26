import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root/Root";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Bookmark from "../Pages/Bookmark/Bookmark";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Content from "../Pages/Blogs/content/Content";
import Author from "../Pages/Blogs/content/Author";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/blogs",
            element: (
               <PrivateRoute>
                  <Blogs></Blogs>
               </PrivateRoute>
            ),
            loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
         },
         {
            path: "/blogDetails/:id",
            element: <BlogDetails></BlogDetails>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
            children: [
               {
                  index: true,
                  element: <Content></Content>,
                  loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
               },
               {
                  path: "author",
                  element: <Author></Author>,
                  loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
               },
            ],
         },
         {
            path: "/bookmark",
            element: (
               <PrivateRoute>
                  <Bookmark></Bookmark>
               </PrivateRoute>
            ),
         },
         {
            path: "/logIn",
            element: <Login />,
         },
         {
            path: "/signUp",
            element: <SignUp></SignUp>,
         },
      ],
   },
]);

export default router;
