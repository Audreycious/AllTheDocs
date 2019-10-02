import React, { Component } from 'react';
import './MainPage.css';
import StackOverflowList from '../Lists/StackOverflowList'
import DocsList from '../Lists/DocsList'
import YoutubeList from '../Lists/YoutubeList'

// const database = [
//     {
//       term: 'fetch',
//       docsData: {
//         mdn: "some shit",
//       },
//       stackOverflowData: 'https://somebullshit.com/api/question/',
//       youtubeData: 'https://someYTbullshit.com/api/videos/',
//     },
//     {
//       term: 'throw',
//       docsData: {
//         mdn: "other shit",
//       },
//       stackOverflowData: 'https://someotherbullshit.com/api/question/',
//       youtubeData: 'https://someotherYTbullshit.com/api/videos/',
//     }
// ]

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            stackOverflowData: [],
            docsData: [],
            youtubeData: [],
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
        const searchQuery = this.state.searchQuery
        const docsURL = `http://localhost:8000/api/documents`
        fetch(docsURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                searchQuery: searchQuery
            })
        })
        .then(response => {
            if (!response.ok) {
                return alert(`response not ok`)
            }
            return response.json()
        })
        .then(responseJson => {
            console.log(responseJson)
            
            const stackOverflowArr = []
            const docsArr = []
            const youtubeArr = []
            // use the array to update the state
                // iterate through the array
            responseJson.forEach(entry => {
                // store the stackOverflowData of each into its own array
                // if (entry.stackOverflowData) {
                //     stackOverflowArr.push(entry.stackOverflowData)
                //     console.log(stackOverflowArr);
                // }
                // store the docsData of each into its own array
                docsArr.push({
                    mdnpagelink: entry.mdnpagelink,
                    reactpagelink: entry.reactpagelink
                })
                // store the youtubeData of each into its own array
                // if (entry.youtubeData) {
                //     youtubeArr.push(entry.youtubeData)
                // }
                // update the state with each of those arrays

                // TODO: add functionality so that it searches for exact matches and only displays that one if it finds a match

                this.setState({
                    stackOverflowData: stackOverflowArr,
                    docsData: docsArr,
                    youtubeData: youtubeArr,
                }, () => console.log(this.state.docsData))
            })
        })

        // youtube fetch

        // stackoverflow fetch
        
    }

    render() {
        let docsDisplay = <DocsList docsData={this.state.docsData} />
        let stackDisplay = <StackOverflowList data={this.state.stackOverflowData} />
        let youtubeDisplay = <YoutubeList data={this.state.youtubeData} />
        
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