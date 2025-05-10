import GetContactForm from "../shared/forms/GetContactForm";
import AboutCom from "./AboutCom";
import BannerSlider from "./Banner";
import SliderSm from "./SliderSm";





const HomeMain = () => {

    return(
        <>
           <div>
            <div><BannerSlider/></div>
            <div><AboutCom/></div>
            <div className="my-10"><SliderSm/></div>
            <div><GetContactForm/></div>
           </div>
        </>  
    )

}

export default HomeMain;