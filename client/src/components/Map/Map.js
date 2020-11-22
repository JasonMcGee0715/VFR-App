import React, { useState } from "react";
import "../Map/Map.css";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const googleAPIKEY = process.env.GOOGLE_MAPS_API_KEY;
// Geocode.setApiKey(googleAPIKEY);
// console.log(googleAPIKEY);

export default function Map({ lat, lng }) {
  const GOOGLE_MAPS_API_KEY = "AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k";

  //   const [selectedBusiness, setSelectedBusiness] = React.useState(null);

  const mapStyles = {
    height: "52vh",
    width: "90%",
  };
  const defaultCenter = {
    lat: Number(lat),
    lng: Number(lng),
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        >
          <Marker
            //   key={props.business.id}
            position={{
              lat: Number(lat),
              lng: Number(lng),
            }}
            // onClick={() => {
            //   setSelectedBusiness(selectedBusiness);
            // }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
