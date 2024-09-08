'use client';

import {
  AdvancedMarker,
  InfoWindow,
  Map,
  MapCameraChangedEvent,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 6.5480793124480225,
  lng: 3.326205302806045,
};

const position = {
  lat: 6.5480793124480225,
  lng: 3.326205302806045,
};

const GoogleMapComponent = () => {
  // map ID
  const MAPID = process.env.NEXT_PUBLIC_MAPID;

  // `markerRef` and `marker are needed to establish the connection between
  // between the marker and the info =Window
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(true);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    [],
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <div className="p-4">
      <Map
        defaultZoom={15}
        defaultCenter={center}
        style={containerStyle}
        mapId={MAPID}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            'camera changed:',
            ev.detail.center,
            'zoom:',
            ev.detail.zoom,
          )
        }
      >
        <AdvancedMarker
          key="Operational Office"
          position={position}
          ref={markerRef}
          onClick={handleMarkerClick}
        >
          <Pin
            background={'#FBBC04'}
            glyphColor={'#000'}
            borderColor={'#000'}
          />
        </AdvancedMarker>
        {infoWindowShown && (
          <InfoWindow anchor={marker} onClose={handleClose}>
            <h2 className="font-semibold">Ping Telecoms Head Office</h2>
            <p>58B Awoniyi Elemo Street, Ajao Estate, Lagos.</p>
          </InfoWindow>
        )}
      </Map>
    </div>
  );
};

export default GoogleMapComponent;
