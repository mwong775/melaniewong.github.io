import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Pokedex.scss';

const pokemons: number = 20;

export interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

export class Pokedex extends React.Component<{}, { pokemons: IPokemon[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            pokemons: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        for (let i = 1; i <= pokemons; i++)
            this.getPokemon(i);
    }

    getPokemon(id: number) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        axios.get(url)
            .then(response => {
                const pokemon = response.data;
                const pokemonType: string = pokemon.types.map((poke: any) => poke.type.name).join(", ");
                const transformedPokemon = {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: `${pokemon.sprites.front_default}`,
                    type: pokemonType,
                }
                this.setState(prevState => ({
                    pokemons: [...prevState.pokemons, transformedPokemon]
                }));
                this.state.pokemons.sort((n1, n2) => n1.id - n2.id);
            })
            .catch(function (error) {
                console.error(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return (
            <div className="App">
                <Link to="/projects"><Button className="back">Back</Button></Link>
                <h2 className="gradient-font">Pokedex</h2>
                <div className="poke">
                    {this.state.pokemons.map((pokemon) => {
                        return (
                            <div className="card" key={pokemon.id}>
                                <span className="card-id">#{pokemon.id}</span>
                                <img className="card-image" src={pokemon.image} alt={pokemon.name} />
                                <h4 className="card-name">{pokemon.name}</h4>
                                <span className="card-details">{pokemon.type}</span>
                            </div>
                        )
                    })}
                    <div className="dummies"></div>
                    <div className="dummies"></div>
                    <div className="dummies"></div>
                    <div className="dummies"></div>
                </div>
            </div>

        );
    }

}