import React from 'react';

function DocsList(props) {    
    const listItems = props.data.map((entry, i) => {        
        return (<li className="DocsListItem" key={i} >
            <a href={entry.mdn || null} >Link</a>
        </li>)
    })

    return (
        <ul className="DocsList">
            {listItems}
        </ul>
    )
}

DocsList.defaultProps = {
    data: []
}

export default DocsList