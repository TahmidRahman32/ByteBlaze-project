import Hero from "./Hero";
import bannerLogo from '../../assets/wave.svg'


const Home = () => {
   return (
      <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-133px)]">
         <Hero></Hero>
         <img className="absolute bottom-0 w-full" src={bannerLogo} alt="" />
      </div>
   );
};

export default Home;