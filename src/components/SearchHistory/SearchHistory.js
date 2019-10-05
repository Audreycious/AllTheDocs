import React, { Component } from 'react';


function SearchHistory(props) {
  const searchHistoryList = props.searchList.map((search, i) => {
      console.log(search);
      return <li key={i}>{search}</li>
  })
  return <ul className="searchHistory">{searchHistoryList}</ul>

}


export default SearchHistory;