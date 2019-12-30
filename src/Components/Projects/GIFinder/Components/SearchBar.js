import * as React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { input: '' }
    }

    onInputChange(input) {
        // console.log(input);
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