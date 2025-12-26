"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  apiKey: string;
}

// ✅ Declare google for TypeScript
declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleMap({ apiKey }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const initMap = () => {
      if (!window.google?.maps || !mapRef.current) return;

      const putturLocation = { lat: 12.7602, lng: 75.2033 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: putturLocation,
        zoom: 13,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#242f3e" }],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ lightness: -80 }],
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
        ],
      });

      new window.google.maps.Marker({
        position: putturLocation,
        map,
        title: "Puttur, Karnataka, India",
      });
    };
    const existingScript = document.querySelector(
      `script[src^="https://maps.googleapis.com/maps/api/js"]`
    ) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      if (window.google?.maps) {
        initMap();
      } else {
        existingScript.addEventListener("load", initMap);
      }
    }
  }, [apiKey]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
    />
  );
}
