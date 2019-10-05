import React from 'react';

export default function SearchHistoryList(props) {
    let listItems = props.searchHistory.map((entry, i) => {
        return (<li className="SearchHistoryListItem" key={i} >
            <button name={entry.searchQuery} onClick={props.handleSearchHistoryClick}>{entry.searchQuery}</button>
        </li>)
    })
    return (
        <ul className="SearchHistoryList">
            {listItems}
        </ul>
    )
}


