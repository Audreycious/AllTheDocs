import React from 'react';

function DocsList(props) {    
    const listItems = props.docsData.map((entry, i) => {        
        return (<li className="DocsListItem" key={i} >
            <a href={entry.mdnpagelink || null} >MDN Link</a><br />
            <a href={entry.reactpagelink || null} >React.js Link</a>
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