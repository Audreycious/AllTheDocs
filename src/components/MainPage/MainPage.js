import React, { Component } from 'react';
import './MainPage.css';
import StackOverflowList from '../Lists/StackOverflowList/StackOverflowList'
import DocsList from '../Lists/DocsList/DocsList'
import YoutubeList from '../Lists/YoutubeList/YoutubeList'
import Nav from '../Nav/Nav'
import SearchHistoryList from '../Lists/SearchHistoryList'
import config from '../../config'



class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            stackOverflowData: [],
            docsData: [],
            youtubeData: [],
            searchHistory: [],
        }
    }
    static defaultProps = {
        tempArray: []
    }

    componentDidMount() {
        let usersUrl = `http://localhost:8000/api/users`
        fetch(usersUrl, {
            method: `POST`,
            body: JSON.stringify({
                user: window.localStorage.getItem(`AllTheDocs-key`)
            }),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(response => {
            if (!response.ok) {
                alert(`Response messed up`)
            }
            return response.json()
        })
        .then(responseJson => {
            this.setState({
                searchHistory: responseJson.userSearchHistory
            })
        })
    }

    handleInputChange = (event) => {
        const target = event.target
        const searchTerm = target.value
        this.setState({
            searchQuery: searchTerm
        })
    }

    getResults = (searchQuery) => {
        this.setState({
            stackOverflowData: [],
            youtubeData: [],
            docsData: [],
            searchQuery: ''
        })

        ////////////////////// stackoverflow fetch //////////////////////////
        const url = `https://api.stackexchange.com//2.2/search/advanced?order=desc&sort=relevance&q=${searchQuery}&site=stackoverflow`
        const stackOverflowArr = [];
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                const firstFiveResults = responseJson.items.slice(0, 5);
                firstFiveResults.forEach(result => {
                    result.title = this.HtmlDecode(result.title)
                    stackOverflowArr.push({
                        title: result.title,
                        link: result.link,
                        questionid: result.question_id
                    })
                })
                if (stackOverflowArr.length !== 0) {
                    this.setState({
                        stackOverflowData: stackOverflowArr,
                    })
                }
                else {
                    this.setState({
                        stackOverflowData: 'noresults'
                    })
                }
            })
            .catch(err => console.log(err))

            
        ////////////////////// docs fetch//////////////////////////
        const docsURL = `${config.API_ENDPOINT}api/documents`
        fetch(docsURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                searchTerm: searchQuery,
                username: window.localStorage.getItem('AllTheDocs-username'),
                password: window.localStorage.getItem('AllTheDocs-password'),
            })
        })
        .then(response => {
            if (!response.ok) {
                return alert(`response not ok`)
            }
            return response.json()
        })
        .then(responseJson => {
            const docsArr = []
            responseJson.forEach(entry => {
                docsArr.push(entry)
            })
            if (docsArr.length !== 0) {
                this.setState({
                    docsData: docsArr,
                })
            }
            else {
                this.setState({
                    docsData: 'noresults'
                })
            }
        })

        ////////////////////// youtube fetch//////////////////////////
        const apiKey = "AIzaSyAORFjA-PflHUei6AhhWJvIxYVuEpJlX90"
        const yturl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${`${searchQuery} javascript`}&type=video&key=${apiKey}`
        const ytDataArr = [];
        fetch(yturl)
            .then(response => response.json())
            .then(responseJson => {
                responseJson.items.forEach(item => {
                    ytDataArr.push({
                        id : item.id.videoId,
                        title:                     this.HtmlDecode(item.snippet.title),
                        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                        thumbnail: item.snippet.thumbnails.default.url,
                    })
                });
                if (ytDataArr.length !== 0) {
                    this.setState({
                        youtubeData: ytDataArr,
                    })
                }
                else {
                    this.setState({
                        youtubeData: 'noresults'
                    })
                }
                
            })
            .catch(err => console.log(err))
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const searchQuery = this.state.searchQuery
        this.state.searchHistory.push({searchname: searchQuery})
        let usersHistoryUrl = `http://localhost:8000/api/users/history`
        fetch(usersHistoryUrl, {
            method: `POST`,
            body: JSON.stringify({
                user: window.localStorage.getItem(`AllTheDocs-key`),
                searchname: searchQuery
            }),
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(response => {
            if (!response.ok) {
                return alert(`Response not ok`)
            }
            return response
        })
        .then(response => {
            console.log(response);
        })
        this.getResults(searchQuery)
    }

    handleLogout = () => {
        window.localStorage.clear('AllTheDocs-username')
        window.localStorage.clear('AllTheDocs-password')
        this.props.history.push('/')
    }

    handleSearchHistoryClick = (event) => {
        let searchQuery = event.target.name
        this.getResults(searchQuery)
        this.setState({
            searchQuery: searchQuery
        })
    }
    
    HtmlDecode(string) {
        let el = document.createElement("div");
        el.innerHTML = string;
        return el.innerText || el.textContent;
    }

    render() {        
        return (
            <div className="main-page">
                <Nav handleLogout={this.handleLogout} />
                <main>
                    <section className="search-bar border">
                        <form action="" onSubmit={this.handleFormSubmit}>
                            <button type="submit" className="button">Search</button> 
                            <input type="text" name="searchbar" id="search-query-bar" value={this.state.searchQuery} onChange={this.handleInputChange} />
                        </form>
                        <SearchHistoryList searchHistory={this.state.searchHistory} handleSearchHistoryClick={this.handleSearchHistoryClick} />
                    </section>
                    <section className="stack-overflow border">
                        <StackOverflowList data={this.state.stackOverflowData} />
                    </section>
                    <section className="documentation border">
                        <DocsList docsData={this.state.docsData} />
                    </section>
                    <section className="youtube border">
                        <YoutubeList data={this.state.youtubeData} />
                    </section>
                    
                </main>
            </div>
        )
    }
}

export default MainPage