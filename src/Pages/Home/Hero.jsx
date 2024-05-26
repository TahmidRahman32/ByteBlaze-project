import { Link } from "react-router-dom";

const Hero = () => {
   return (
      <div className="hero ">
         <div className="hero-content text-center">
            <div className="max-w-lg">
               <h1 className="text-4xl font-bold">
                  welcome to <span className="bg-gradient-to-r from-secondary via-blue-500 to-primary text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span>
               </h1>
               <p className="py-6">ByteBlaze is the bridge berween the complex word of technology and the curious minds eager to understand it </p>
               <div className="flex gap-3 justify-center">
                  <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group">
                     <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                     <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                     <span className="relative text-secondary group-hover:text-white">Read Blogs</span>
                  </Link>
                  <Link to="/bookmark" className="relative inline-block px-4 py-2 font-medium group">
                     <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                     <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                     <span className="relative text-secondary group-hover:text-white">Bookmark</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
