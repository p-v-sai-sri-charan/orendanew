import React from 'react'
import GoogleMapReact from 'google-map-react';
import "./Contact.css"
import { Button } from 'primereact/button';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Contact() {
    const defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    return (
        <div className="grid grid-cols-2 bg-white pt-12">
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCrTcYZMK75rh4t3a2uNuZ6-DhLVoS4Hi4"}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      <div>
        <div className="flex align-center justify-center">
            <p className="text-5xl">Contact Us</p>
        </div>
      <div className="grid grid-rows-7 m-6 gap-4">
        <div className="w-full">
            <input class="inp" placeholder="Name" />
        </div>
        <div className="w-full">
            <input class="inp" placeholder="Phone"/>
        </div>
        <div className="w-full">
            <input class="inp" placeholder="Email"/>
        </div>
        <div className="w-full">
            <input class="inp" placeholder="Please provide a brief description and any other important information"/>
        </div>
        <div className="w-full">
            <input class="inp" placeholder="Total Project Budget"/>
        </div>
        <div className="w-full">
            <input class="inp" placeholder="Project to be completed by"/>
        </div>
        <div className="w-full">
        <input class="inp" placeholder="How did you hear about us"/>
        </div>
      </div>
      <div className="flex align-center justify-center">
            <Button label="Submit"/>
        </div>
      </div>
        </div>
    )
}

export default Contact
