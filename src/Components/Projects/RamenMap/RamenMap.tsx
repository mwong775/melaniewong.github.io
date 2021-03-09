import * as React from "react";
import { readRemoteFile } from 'react-papaparse';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { VectorMap } from "react-jvectormap";
import countryCodes from './CountryCodes';
import countryNames from './CountryNames';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';

const brand = 1, variety = 2, style = 3, country = 4, stars = 5, top_ten = 6;
export class RamenMap extends React.Component<{}, { ramenCount: any, ramenList: any, selected: any, page: number, rowsPerPage: number, emptyRows: number, topTen: any[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            ramenCount: {},
            ramenList: {},
            selected: {},
            page: 0,
            rowsPerPage: 5,
            emptyRows: 0,
            topTen: new Array<number>(3), // top 3, only 2016 (out of 2012 - 2016)
        }
    }
    componentDidMount() {
        readRemoteFile('https://raw.githubusercontent.com/mwong775/mwong775.github.io/development/src/assets/ramen-ratings.csv', {
            complete: (results: any) => {
                // console.log('Results: ', results, results.data.length);
                // console.log(getData());  //gets an array of all countries names & codes: [{code: "AU", name: "Australia"}, ...]
                let ramenCount = {}, ramenList = {};
                let topTenList: any = [];
                for (let i = 1; i < results.data.length; i++) {
                    let ramen = results.data[i];
                    if (ramen[0] === undefined)
                        continue;
                    let countryCode = countryCodes[ramen[country]];
                    if (ramenCount[countryCode] === undefined) {
                        ramenList[countryCode] = [];
                        ramenCount[countryCode] = 0;
                    }
                    ramenList[countryCode].push(ramen);
                    ramenCount[countryCode]++;

                    const topTen = ramen[top_ten];
                    if (topTen && parseInt(topTen) === 2013) {
                        const rank = topTen[topTen.length - 1];
                        // console.log(topTen, ramen[country], ramen[variety]);
                        if (rank >= 1 && rank <= 3)
                            topTenList[rank-1] = ramen[variety] + " - " + ramen[country];
                    }
                }
                // console.log(topTenList);
                this.setState({
                    ramenCount: ramenCount,
                    ramenList: ramenList,
                    topTen: topTenList
                });
            }
        })
    }

    handleMapClick = (e, countryCode) => {
        // console.log(e, countryCode, countryNames[countryCode], this.state.ramenList[countryCode]);
        if (countryNames[countryCode] === undefined) {
            this.setState({
                selected: {
                    ramenCount: null,
                    country: '',
                    ramenList: [],
                }
            });
        } else
            this.setState({
                selected: {
                    ramenCount: this.state.ramenCount[countryCode],
                    country: countryNames[countryCode],
                    ramenList: this.state.ramenList[countryCode],
                    emptyRows: this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.ramenList[countryCode].length - this.state.page * this.state.rowsPerPage),
                }
            });
        // fixes country tooltip overload issue
        setTimeout(() => { Array.from(document.getElementsByClassName("jvectormap-tip") as HTMLCollectionOf<HTMLElement>).forEach((el) => { el.style.display = 'none' }); }, 100);
    };

    handleChangePage = (e, newPage) => {
        this.setState({
            page: newPage
        });
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        });
    }


    render() {
        return (
            <div className="App row">
                <Link to="/projects"><Button className="back">Back</Button></Link>
                <div>
                    <div className="map-header">
                        <h2 className="gradient-font">Ramen Map</h2>
                    </div>
                    <div style={{ padding: '0 7% 4% 7%', textAlign: 'left' }}>
                        <li>Dataset from <a href="https://www.kaggle.com/residentmario/ramen-ratings" target="_blank" rel="noopener noreferrer">Kaggle</a> (2018)</li>
                        <li>Displays number of instant ramens produced by each country</li>
                        <li>Note: countries not displayed below are either not in the dataset or not (yet) part of the country-code mapping</li>
                        {this.state.selected.ramenList &&
                            <h4>
                                Country: {this.state.selected.country}<br />
                                Ramen count: {this.state.selected.ramenCount}
                            </h4>
                        }
                        {this.state.selected.ramenList &&
                            <TableContainer component={Paper}>
                                <Table className="{classes.table}" aria-label="simple table">
                                    <TableHead>
                                        <TableRow hover>
                                            <TableCell>Brand</TableCell>
                                            <TableCell>Variety</TableCell>
                                            <TableCell>Style</TableCell>
                                            <TableCell>Rating (Stars)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {(this.state.rowsPerPage > 0
                                            ? this.state.selected.ramenList.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                            : this.state.selected.ramenList
                                        ).map((row) => (
                                            <TableRow key={row[variety]}>
                                                <TableCell component="th" scope="row">
                                                    {row[brand]}
                                                </TableCell>
                                                <TableCell>{row[variety]}</TableCell>
                                                <TableCell>{row[style]}</TableCell>
                                                <TableCell><Rating name="half-rating-read" defaultValue={2.5} value={parseInt(row[stars])} precision={0.25} readOnly /></TableCell>
                                            </TableRow>
                                        ))}
                                        {this.state.emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * this.state.emptyRows }}>
                                                <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                                colSpan={3}
                                                count={this.state.selected.ramenList.length}
                                                rowsPerPage={this.state.rowsPerPage}
                                                page={this.state.page}
                                                onChangePage={this.handleChangePage}
                                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                            />
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        }
                    </div>
                </div>
                <VectorMap
                    map={"world_mill"}
                    ref={"map"}
                    backgroundColor="rgba(2, 123, 255, 0.4)" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "85%",
                        height: "600px"
                    }}
                    onRegionClick={this.handleMapClick} //gets the country code
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#e4e4e4",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                        },
                        hover: {
                            "fill-opacity": 0.8,
                            cursor: "pointer"
                        },
                        selected: {
                            fill: "#2938bc" //color for the clicked country
                        },
                        selectedHover: {}
                    }}
                    // regionsSelectable={true}
                    series={{
                        regions: [
                            {
                                values: this.state.ramenCount, //this is your data
                                scale: ["#e0ccff", "#5c00e6"], //your color game's here
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                />
            </div>
        );
    }
}