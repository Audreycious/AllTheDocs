import React, { Component } from 'react';
import './MainPage.css';

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: "",
        }
    }
    static defaultProps = {
        tempArray: []
    }

    handleInputChange = (event) => {
        const target = event.target
        const searchTerm = target.value
        this.setState({
            searchQuery: searchTerm
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.searchQuery)
    }

    render() {
        let tempArray = this.props.docData
        let mdnDisplay = tempArray.map((entry, i) => {
            return entry.mdn
        })
        return (
            <div className="main-page">
                <nav>Nav</nav>
                <main>
                    <section className="search-bar border">
                        <form action="" onSubmit={this.handleFormSubmit}>
                            <button type="submit">Search</button> 
                            <input type="text" name="searchbar" value={this.state.searchQuery} onChange={this.handleInputChange} />
                        </form>
                    </section>
                    <section className="stack-overflow border">{this.props.stackOverflowData || []}</section>
                    <section className="documentation border">{mdnDisplay || []}</section>
                    <section className="youtube border">{this.props.youtubeData || []}</section>
                </main>
            </div>
        )
    }
}

export default MainPage