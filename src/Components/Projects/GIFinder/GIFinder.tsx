import * as React from "react";
import './GIFinder.scss';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import GifList from './Components/GifList';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const PUBLIC_KEY = 'wy1tKswrmePmcwQI2hV3RBd336yfjvkS';
const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const LIMIT = 15;
const OFFSET = 0;
const RATING = 'G';
const LANG = 'en';

export class GIFinder extends React.Component {
  state = {
    gifs: [],
    viewMode: 'Trending'
  }
  // this.handleInputChange = this.handleInputChange.bind(this);

  componentDidMount() {
    this.getTrending();
  }

  getTrending() {
    // Make a request for a user with a given ID
    const url = BASE_URL + 'trending?api_key=' + PUBLIC_KEY + '&limit=' + LIMIT + '&rating=' + RATING;
    axios.get(url)
      .then(response => {
        // handle success
        // console.log("response:", response);
        this.setState({ gifs: response.data.data });
        // console.log("set gifs", this.state.gifs);
        // console.log("STATE", this.state);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  handleInputChange = (term: string) => {
    // console.log("in App", term);
    const url = BASE_URL + 'search?api_key=' + PUBLIC_KEY + '&q=' + term + '&limit=' + LIMIT + '&offset=' + OFFSET + '&rating=' + RATING + '&lang=' + LANG;
    // console.log('url for GET: ', url);
    axios.get(url)
      .then(response => {
        // console.log("response:", response);
        if (response.data.data[0]) {
          // const src = response.data.data[0].images.original.url; // single GIF
          const searching = "Displaying results for: " + term;
          this.setState({ gifs: response.data.data, viewMode: searching });
          // console.log("set gifs on search", this.state.gifs);
        }
        else {
          this.getTrending(); // search input is empty (typically upon delete)
          this.setState({ viewMode: "Trending" });
        }
      })
  }

  render() {
    return (
      <div className="App">
        <Link to="/projects"><Button className="back">Back</Button></Link>
        <h1>GIFinder</h1>
        <h5>A simple search to discover awesome GIFs, powered by the Giphy API</h5>
        <SearchBar onInputChange={this.handleInputChange} />
        <h2>{this.state.viewMode}</h2>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
