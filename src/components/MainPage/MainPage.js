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
        const value = target.value
        this.setState({
            searchQuery: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const search = event.target.searchbar
        const value = search.value
        this.props.onSearchSubmit(value)
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
                    <section className="stack-overflow border">Stack Overflow {this.props.stackOverflowData[0] || []}</section>
                    <section className="documentation border">Docs {mdnDisplay || []}</section>
                    <section className="youtube border">YouTube</section>
                </main>
            </div>
        )
    }
}

export default MainPage