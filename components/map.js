import { useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";
import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import useStore from "@/lib/store";
import { useRouter } from "next/router";
import Link from "next/link";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmhhdnlhZ3VwdGExMjciLCJhIjoiY2xncGY3Mml3MHJ5MzNkcDkya2JoZWxxaCJ9.8UoSDJE-QV7fWvj3pMcwcw";

const Map = () => {
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(3);
  const [path, setPath] = useState("/");
  const router = useRouter();
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

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "bottom-right");
  }, [lng, lat, zoom,path]);
  useEffect(() => {
    if(router.pathname=="/home")
        setPath(router.pathname);
  }, [router.pathname])
  function consolelog() {
    if (m.getDestination().geometry) {
      console.log(m.getDestination().geometry.coordinates);
      setDst(m.getDestination().geometry.coordinates);
      console.log(m.getOrigin().geometry.coordinates);
      setSrc(m.getOrigin());
      console.log(m);
      // router.push("/request");
    }
  }

  console.log(router.pathname);

  return (
    <>
      {router.pathname === "/home" ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div className=" text-4xl  h-screen flex  temp">
            <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-40 px-16">
              <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
                Choose Your Location
              </h1>

              <form>
                <div className="w-screen max-w-xs"></div>
                <br />
                <div className="flex justify-center items-center mt-6">
                  <Link href={{ pathname: "/request" }}>
                    <button
                      className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
                      onClick={consolelog}
                    >
                      Continue
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div id="map"> map</div>;
    </>
  );
};

export default Map;
