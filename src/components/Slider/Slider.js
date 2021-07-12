import React from 'react'
import one from "../../Images/1.jpg"; 
import two from "../../Images/2.jpg";
import three from "../../Images/3.jpg";
import four from "../../Images/4.jpg";
import five from "../../Images/5.jpeg";
import { Fade } from 'react-slideshow-image';
import "./Slider.css"
import 'react-slideshow-image/dist/styles.css'


function Slider() {
    const fadeImages = [
        one,two,three,four,five
      ];

    return (
        <div >
            <div className="">
      <Fade duration={2000} cssClass="customClass">
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
        </div>
    )
}

export default Slider
