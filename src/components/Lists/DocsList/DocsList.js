import React from 'react';
import "./DocsList.css"

function DocsList(props) {    
    const listItems = props.docsData.map((entry, i) => {      
        return (<li className="DocsListItem" key={i} >
            <a className={`darken`} target="_blank" rel="noopener noreferrer" href={entry.mdnpagelink} ><img src={entry.mdnimagelink} alt={`Results from the ${entry.term} search`}/></a>
            {/* <a href={entry.reactpagelink || null} >React.js Link</a> */}
        </li>)
    })
    let display
    if (props.docsData.length === 0) {
        display =  `Enter search term to see Documentation here`
    }else {
        display = <ul className="DocsList" >{listItems}</ul>
    }
    
    return (
        <React.Fragment>
            {display}
        </React.Fragment>
    )
}

DocsList.defaultProps = {
    data: []
}

export default DocsList