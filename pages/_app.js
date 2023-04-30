import { useState } from "react";
import "@/styles/globals.css";
import "@/styles/radio.css";
import "@/styles/map.css";
import Navbar from "./navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Map from "../components/map";
import "mapbox-gl/dist/mapbox-gl.css";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="flex items-center justify-center">
        <Map />
        <Component {...pageProps} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
