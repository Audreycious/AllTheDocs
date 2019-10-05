import React from 'react';
import "./DocsList.css"

function DocsList(props) {    
    const listItems = props.docsData.map((entry, i) => {      
        console.log(entry)          
        return (<li className="DocsListItem" key={i} >
            <a target="_blank" href={entry.mdnpagelink} ><img src={entry.mdnimagelink} alt={`An image of the results from the ${entry.term} search`}/></a>
            {/* <a href={entry.reactpagelink || null} >React.js Link</a> */}
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