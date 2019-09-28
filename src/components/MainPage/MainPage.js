import React, { Component } from 'react';
import './MainPage.css';
import StackOverflowList from '../Lists/StackOverflowList'
import DocsList from '../Lists/DocsList'
import YoutubeList from '../Lists/YoutubeList'


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
        let docsDisplay = <DocsList data={this.props.docsData} />
        let stackDisplay = <StackOverflowList data={this.props.stackOverflowData} />
        let youtubeDisplay = <YoutubeList data={this.props.youtubeData} />
        
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
                    <section className="stack-overflow border">
                        {stackDisplay || []}
                    </section>
                    <section className="documentation border">
                        {docsDisplay || []}
                    </section>
                    <section className="youtube border">
                        {youtubeDisplay || []}
                    </section>
                </main>
            </div>
        )
    }
}

export default MainPage