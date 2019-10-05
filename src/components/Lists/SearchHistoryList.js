import React from 'react';

export default function SearchHistoryList(props) {
    let listItems = props.searchHistory.map((entry, i) => {
        return (<li className="SearchHistoryListItem" key={i} >
            <button name={entry.searchQuery} onClick={props.handleSearchHistoryClick}>{entry.searchQuery}</button>
        </li>)
    })
    const top4ListItems = listItems.slice(-4)

    return (
        <ul className="SearchHistoryList">
            {top4ListItems}
        </ul>
    )
}


