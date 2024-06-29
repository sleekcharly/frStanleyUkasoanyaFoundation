'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 6.548430671085271,
  lng: 3.32716774269944,
};

const position = {
  lat: 6.548430671085271,
  lng: 3.32716774269944,
};

const options = {
  scrollwheel: false,
};

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const GoogleMapComponent = () => {
  if (!GOOGLE_MAPS_API_KEY) {
    console.error('Google Maps API key is missing.');
    return null;
  }

  return (
    <div className="p-4">
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={options}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
