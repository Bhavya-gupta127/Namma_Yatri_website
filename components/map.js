import { useEffect, useState } from "react";

// import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// const MapboxDirections = require('mapbox-gl/dist/mapbox-gl.js')
// import Mapa from '@/components/modules/Home/Map/Map'

// import MapboxDirections from '@mapbox/mapbox-gl-directions';

// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

import useStore from "@/lib/store";
import { useRouter } from "next/router";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmhhdnlhZ3VwdGExMjciLCJhIjoiY2xncGY3Mml3MHJ5MzNkcDkya2JoZWxxaCJ9.8UoSDJE-QV7fWvj3pMcwcw";

const Map = () => {
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(3);
  const router = useRouter();
  //manual markers
  // const [pickLocation, setPickLocation] = useState([1, 1]);
  // const [dropLocation, setDropLocation] = useState([1, 1]);
  const setSrc = useStore((state) => state.setSrc);
  const setDst = useStore((state) => state.setDst);
  const src = useStore((state) => state.src);
  const dst = useStore((state) => state.dst);

  console.log(src, dst);

  var m;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    m = new Directions({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      interactive: false,
      controls: {
        profileSwitcher: false,
        instructions: false,
      },
    });
    if (router.pathname === "/home") {
      map.addControl(m, "top-left");
    }
    // m.on('result',(e=>{
    //   console.log(e);
    // }))

    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true,
    //     },
    //     trackUserLocation: true,
    //     showUserHeading: true,
    //   })
    // );

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "bottom-right");

    // const geolocate = new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //   enableHighAccuracy: true
    //   },
    //   trackUserLocation: true
    //   });

    //manual markers
    // setPickLocation(pick);
    // setDropLocation(drop);
    // if (pickLocation) addToMap(map, pickLocation);
    // if (dropLocation) addToMap(map, dropLocation);
    // if (pickLocation && dropLocation) {
    //   map.fitBounds([
    //     dropLocation, // southwestern corner of the bounds
    //     pickLocation, // northeastern corner of the bounds
    //   ]);
    // }
  }, [lng, lat, zoom, router.pathname]);

  function consolelog() {
    // m.setOrigin("ambala");
    // m.setOrigin("delhi");
    if (m.getDestination().geometry) {
      console.log(m.getDestination().geometry.coordinates);
      setDst(m.getDestination().geometry.coordinates);
      console.log(m.getOrigin().geometry.coordinates);
      setSrc(m.getOrigin().geometry.coordinates);
      console.log(m);
      router.push('/request');
    }
  }

  console.log(router.pathname);
  //manual markers
  // const addToMap = (map, coordinates) => {
  //   const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  // };

  return (
    <>
      {router.pathname === "/home" ? (
        <div
          style={{ position: "absolute", zIndex: "10000" }}
          onClick={consolelog}
        >
          Continue
        </div>
      ) : (
        <></>
      )}
      <div id="map"> map</div>;
    </>
  );
};

export default Map;
