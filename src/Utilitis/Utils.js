import toast from "react-hot-toast";

export const getLocalStorage = () => {
   let blog = [];
   const storeBlog = localStorage.getItem("blog");
   if (storeBlog) {
      blog = JSON.parse(storeBlog);
   }
   return blog;
};

export const saveLocalStorage = (blog) => {
   let blogs = getLocalStorage();
   const isExist = blogs.find(b => b.id === blog.id);
   if(isExist){
      return toast.error("This didn't work.");
   }
   else{
      blogs.push(blog);
      localStorage.setItem("blog", JSON.stringify(blogs));
      toast.success("Successfully toasted!");
   }

};

export const localStorageDeleteBtn = id =>{
   let blogs = getLocalStorage();
   
   const remaining = blogs.filter(b => b.id !== id);
   
   localStorage.setItem('blog', JSON.stringify(remaining));
   // console.log(remaining);
   toast.success("Successfully Delete Ui!");
}
