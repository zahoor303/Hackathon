import Image from "next/image";
import CataloguePage from "./Homepage/cataloguePage";
import Navbar from "./Homepage/navbar";
import Footer from "./Homepage/footer";
import HeroSection from "./Homepage/hero";
import RecommendationCar from "./Homepage/recommand";
import CategoryPage from "./catageroyPage/page";
import CarDetailPage from "./carDeatailpage/hero";
import PaymentPage from "./paymentpage/payment";
import Dashboard  from "./Dashboardpage/dash";



export default function Home() {
  return (
   <div> 
    
    <Navbar/>
   <HeroSection/>
   <CataloguePage/>
   <RecommendationCar />
   <Footer/>
   <CategoryPage/>
   <CarDetailPage/>
   <PaymentPage/>
   <Dashboard/>
   </div>
  );
}
