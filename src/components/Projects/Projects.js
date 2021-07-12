import React from 'react'
import "./Projects.css"
import one from "../../Images/Pritesh/1.jpg"
import two from "../../Images/Pritesh/2.jpg"
import three from "../../Images/Pritesh/3.jpg"
import four from "../../Images/Pritesh/4.jpg"
import five from "../../Images/Pritesh/5.jpg"
import six from "../../Images/Pritesh/6.jpg"
import seven from "../../Images/Pritesh/7.jpg"
import eight from "../../Images/Pritesh/8.jpg"
import nine from "../../Images/Pritesh/9.jpg"
import ten from "../../Images/Pritesh/10.jpg"
import elven from "../../Images/Pritesh/11.jpg"
import twelve from "../../Images/Pritesh/12.jpg"
import thirteen from "../../Images/Pritesh/13.jpg"
import fourteen from "../../Images/Pritesh/14.jpg"
import fiveteen from "../../Images/Pritesh/15.jpg"
import sixteen from "../../Images/Pritesh/16.jpg"
import senventeen from "../../Images/Pritesh/17.jpg"

function Projects() {
    return (
        <div className="grid grid-cols-2 grid-rows-8 w-full
        sm:grid-cols-2 sm:grid-rows-8
        md:grid-cols-3 md:grid-rows-8
        lg:grid-cols-4 lg:grid-rows-4
        xl:grid-cols-4 xl:grid-rows-4
        2xl:grid-cols-4 2xl:grid-rows-4 gap-4 bg-white">
            <div className>
                <a class="lightbox" href="#one">
                    <img src={one} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#two">
                    <img src={two} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#three">
                    <img src={three} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#four">
                    <img src={four} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#five">
                    <img src={five} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#six">
                    <img src={six} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#six">
                    <img src={seven} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#eight">
                    <img src={eight} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#nine">
                    <img src={nine} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#ten">
                    <img src={ten} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#elven">
                    <img src={elven} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#twelve">
                    <img src={twelve} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#thirteen">
                    <img src={thirteen} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#fourteen">
                    <img src={fourteen} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#fiveteen">
                    <img src={fiveteen} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#sixteen">
                    <img src={sixteen} />
                </a>

            </div>
            <div>
                <a class="lightbox" href="#senventeen">
                    <img src={senventeen} />
                </a>

            </div>
        </div>
    )
}

export default Projects
