import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    };

    render(){
        return (<div className="ui segment search-bar">
            <form action="" className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label htmlFor="search">Video Search</label>
                    <input
                        type="text"
                        id="search"
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                    />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar