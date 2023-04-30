import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
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
  const [path, setPath] = useState("/");
  const router = useRouter();
  const setSrc = useStore((state) => state.setSrc);
  const setDst = useStore((state) => state.setDst);

  let m;
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
  }, [lng, lat, zoom, path]);

  useEffect(() => {
    if (router.pathname == "/home") setPath(router.pathname);
  }, [router.pathname]);

  function handleSet(e) {
    e.preventDefault();
    if (m.getDestination().geometry && m.getOrigin().geometry) {
      setDst(m.getDestination().geometry.coordinates);
      setSrc(m.getOrigin().geometry.coordinates);
      console.log("Done")
      router.push("/request");
    }
  }

  return (
    <>
      {router.pathname === "/home" ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div className=" text-2xl h-screen flex">
            <div className=" mh-full  m-auto flex-col items-center bg-white  rounded-lg sm:border sm:border-primaryBorder shadow-default py-20">
              <h1 className="text-blackfont-medium text-primary mt-4 mb-12 text-center">
                Choose Your Location
              </h1>

              <form>
                <div className="w-screen max-w-xs"></div>
                <br />
                <div className="flex justify-center items-center mt-6">
                  <button
                    className={`w-full bg-black text-white font-medium bg-green py-2 px-4 text-xl rounded border border-green focus:outline-none focus:border-green-dark`}
                    onClick={handleSet}
                  >
                    Continue
                  </button>
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
