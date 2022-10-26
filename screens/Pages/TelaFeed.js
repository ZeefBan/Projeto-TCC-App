import React from "react";
import {View, Text, StyleSheet} from "react-native";
import styles from "../../style/mainStyles";
import GoogleMapReact from 'google-map-react';


const  AnyReactComponent  =  ( { text } )  =>  <div> { text } </div> ;

export default function Feed() {
  const defaultProps = {
    center: {
      lat: -23.5936699,
      lng: -46.407809
    },
    zoom: 18
  };

  const  handleApiLoaded  =  ( map ,  maps )  =>  { 
    // usa map and maps objects 
  };

    return(

      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBikaZe_qA1hq-wSEZdkcoMme8T9sXqfvg" }}
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

    );
}
