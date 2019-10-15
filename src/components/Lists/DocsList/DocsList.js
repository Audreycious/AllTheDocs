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
                <span>MDN</span>
                <a className={`darken`} target="_blank" rel="noopener noreferrer" href={entry.mdnpagelink} ><img src={entry.mdnimagelink} alt={`MDN results from the ${entry.term} search`}/></a>
                <br/>
                <span>React.js</span>
                <a className={`darken`} target="_blank" rel="noopener noreferrer" href={entry.reactpagelink} ><img src={entry.reactimagelink} alt={`React results from the ${entry.term} search`}/></a>
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