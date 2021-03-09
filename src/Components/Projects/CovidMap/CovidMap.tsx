import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from 'leaflet';

const LOCATION = {
    lat: 38.9072,
    lng: -77.0369
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;

export class CovidMap extends React.Component {
    render() {
        const mapSettings = {
            center: CENTER,
            defaultBaseMap: 'OpenStreetMap',
            zoom: DEFAULT_ZOOM,
          };
        return (
            <div className="App">
                <Link to="/projects"><Button className="back">Back</Button></Link>
                covid
                {/* <Map {...mapSettings} /> */}
            </div>
        )
    }
}