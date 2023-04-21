import { useEffect, useState } from "react"

import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl";
// const MapboxDirections = require('mapbox-gl/dist/mapbox-gl.js')
// import Mapa from '@/components/modules/Home/Map/Map'

// import MapboxDirections from '@mapbox/mapbox-gl-directions';

// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

import useStore from "@/lib/store";
mapboxgl.accessToken = 'pk.eyJ1IjoiYmhhdnlhZ3VwdGExMjciLCJhIjoiY2xncGY3Mml3MHJ5MzNkcDkya2JoZWxxaCJ9.8UoSDJE-QV7fWvj3pMcwcw';

const Map = () => {
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(3);
const [pickLocation, setPickLocation] = useState([1,1]);
const [dropLocation, setDropLocation] = useState([1,1]);
const pick=useStore((state) => state.pickLocation);
const drop=useStore((state) => state.dropLocation);
useEffect(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
  });
  // map.addControl(
  //   new MapboxDirections({
  //   accessToken: mapboxgl.accessToken
  //   }),
  //   'top-left'
  //   );

  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
    }));
    const projection = map.getProjection();

  const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
    });
    map.addControl(nav, 'bottom-right');
  // const geolocate = new mapboxgl.GeolocateControl({
  //   positionOptions: {
  //   enableHighAccuracy: true
  //   },
  //   trackUserLocation: true
  //   });
  // map.addControl(geolocate);
  // // Set an event listener that fires
  // // when a trackuserlocationstart event occurs.
  // geolocate.on('trackuserlocationstart', () => {
  // console.log('A trackuserlocationstart event has occurred.');
  // }); 
      setPickLocation(pick);
      setDropLocation(drop);
      if(pickLocation)
        addToMap(map,pickLocation); 
      if(dropLocation)
        addToMap(map,dropLocation);
      if(pickLocation && dropLocation)
      {
        map.fitBounds([
            dropLocation, // southwestern corner of the bounds
            pickLocation // northeastern corner of the bounds
          ]);
      }

    },[pickLocation,dropLocation]);

    const addToMap=(map,coordinates)=>{
      const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }
    
  return (
    <div id='map'> map</div>
  )
}

export default Map