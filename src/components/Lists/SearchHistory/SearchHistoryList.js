import React from 'react';

export default function SearchHistoryList(props) {
    let listItems = props.searchHistory.map((entry, i) => {
        return (<li className="SearchHistoryListItem" key={i} >
            <button className="button" name={entry.searchname} onClick={props.handleSearchHistoryClick}>{entry.searchname}</button>
        </li>)
    })
    const top4ListItems = listItems.slice(-4)

    return (
        <ul className="SearchHistoryList">
            {top4ListItems}
        </ul>
    )
}

SearchHistoryList.defaultProps = {
    searchHistory: [],
}
