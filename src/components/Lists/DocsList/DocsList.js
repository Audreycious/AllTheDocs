import React from 'react';
import "./DocsList.css"

function DocsList(props) {   
    let display
    if (props.docsData === 'noresults') {
        display = `Sorry, no results`
    }
    else {
        const listItems = props.docsData.map((entry, i) => {      
            return (<li className="DocsListItem" key={i} >
                <a className={`darken`} target="_blank" rel="noopener noreferrer" href={entry.mdnpagelink} ><img src={entry.mdnimagelink} alt={`Results from the ${entry.term} search`}/></a>
                {/* <a href={entry.reactpagelink || null} >React.js Link</a> */}
            </li>)
        })
        if (props.docsData.length === 0) {
            display =  `Enter search term to see Documentation here`
        }
        else {
            display = <React.Fragment> <span>Documentation links here:</span><ul className="DocsList" >{listItems}</ul></React.Fragment>
        }
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