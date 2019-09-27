import React, { Component } from 'react'
import './App.css'
import MainPage from './components/MainPage/MainPage'

const database = [
  {
    term: 'fetch',
    docData: {
      mdn: "some shit",
    },
    stackOverflowData: 'https://somebullshit.com/api/question/',
    youtubeData: 'https://someYTbullshit.com/api/videos/',
  },
  {
    term: 'throw',
    docData: {
      mdn: "other shit",
    },
    stackOverflowData: 'https://someotherbullshit.com/api/question/',
    youtubeData: 'https://someotherYTbullshit.com/api/videos/',
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      stackOverflowData: [],
      docData: [],
      youtubeData: [],
    }
  }

  onSearchSubmit = (search) => {  
    const searchArr = []  
    // iterate through the database
    database.forEach(entry => {
      // on each, compare search against the term
        // compare with .includes()
      if (entry.term.includes(search)) {
        // once we find a match, store the match in a variable
          // keep going until the end
        searchArr.push(entry)
      }
    })    
    const stackOverflowArr = []
    const docsArr = []
    const youtubeArr = []
    // use the array to update the state
      // iterate through the array
    searchArr.forEach(entry => {
      // store the stackOverflowData of each into its own array
      if (entry.stackOverflowData) {
        stackOverflowArr.push(entry.stackOverflowData)
        console.log(stackOverflowArr);
      }
      // store the docsData of each into its own array
      if (entry.docData) {
        docsArr.push(entry.docData)
      }
      // store the youtubeData of each into its own array
      if (entry.youtubeData) {
        youtubeArr.push(entry.youtubeData)
      }
      // update the state with each of those arrays
      this.setState({
        stackOverflowData: stackOverflowArr,
        docData: docsArr,
        youtubeData: youtubeArr,
      }, () => console.log(this.state.docData))
    })
  }

  render() {
    return (
      <div className="App">
        <MainPage stackOverflowData={this.state.stackOverflowData} docData={this.state.docData} youtubeData={this.state.youtubeData} onSearchSubmit={this.onSearchSubmit} />
        
      </div>
    )
  }
}

export default App;
