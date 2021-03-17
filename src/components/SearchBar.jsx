import React, { Component } from 'react'

class SearchBar extends Component {

    handleChange = (event) => {
        const value = event.target.value

        console.log(value)
    }

    render() {
        return (
            <div>
                <h3>Search</h3>
            <form>
            <input onChange={this.handleChange} type="text" placeholder="Search..." />
            </form>
            </div>

        )
    }
}

export default SearchBar
