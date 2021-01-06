import * as React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from 'leaflet';
import { readRemoteFile } from 'react-papaparse';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './BobaMap.scss';

const zoom: number = 9;

export interface marker {
    coords: LatLngTuple;
    name: string;
    address: string;
    city: string;
}

export class BobaMap extends React.Component<{}, { geoLocation: LatLngTuple, geoError: any, markers: marker[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            geoLocation: [37.763659, -122.485595],
            geoError: null,
            markers: [],
        }
    }
    componentDidMount() {
        readRemoteFile('https://raw.githubusercontent.com/mwong775/mwong775.github.io/development/src/assets/bayarea_boba_spots.csv', {
            complete: (results: any) => {
                // console.log('Results: ', results, results.data.length);
                let name = 2, address = 4, city = 5, lat = 6, long = 7;
                let places: marker[] = [];
                for (let i = 1; i < results.data.length; i++) {
                    let place = results.data[i];
                    if (place[name] === undefined)
                        continue;
                    places.push({
                        coords: [place[lat], place[long]],
                        name: place[name],
                        address: place[address],
                        city: place[city],
                    })
                }
                this.setState(prevState => ({
                    markers: [...prevState.markers, ...places]
                }))

            }
        })
        navigator.geolocation.getCurrentPosition((e) => {
            this.setState({
                geoLocation: [e.coords.latitude, e.coords.longitude]
            });
        }, async (err) => {
            this.setState({
                geoError: err
            });
        });
    }

    render() {
        return (
            <div className="App row">
                    <Link to="/projects"><Button className="back">Back</Button></Link>
                <div>
                    <div className="map-header">
                        <h2 className="gradient-font">Boba Map!</h2>
                        <h4>Dataset from <a href="https://www.kaggle.com/vnxiclaire/bobabayarea" target="_blank" rel="noopener noreferrer">Kaggle</a></h4>
                    </div>
                </div>
                <div>

                <Map id="mapId" center={this.state.geoLocation} zoom={zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'>
                    </TileLayer>
                    <Marker position={this.state.geoLocation}>
                        <Popup>
                            <h3>Current Location</h3>
                        </Popup>
                    </Marker>
                    {this.state.markers.map((places) => {
                        return (
                            <Marker position={places.coords}>
                                <Popup>
                                    <h3>{places.name}</h3>
                                    <h4>{places.address} - {places.city}</h4>
                                </Popup>
                            </Marker>
                        )
                    })}
                </Map>
                </div>
            </div>
        );
    }
}