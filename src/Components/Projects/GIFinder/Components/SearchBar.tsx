import * as React from 'react';

type InputState = {
    input: string
}

type InputProps = {
    onInputChange: (e: any) => void;
} 

class SearchBar extends React.Component<InputProps, InputState> {
    onInputChange = (input: string) => {
        this.setState({input});
        this.props.onInputChange(input);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} placeholder="Start typing here to find GIFs!"/>
            </div>
        );
    }
}

export default SearchBar;