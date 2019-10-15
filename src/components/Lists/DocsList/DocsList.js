import React from 'react';
import "./DocsList.css"

function DocsList(props) {   
    let display
    if (props.docsData === 'noresults') {
        display = `Sorry, no results`
    }
    else {
        const listItems = props.docsData.map((entry, i) => {      
            let mdndisplay
            if (entry.mdnimagelink.startsWith('http')) {
                mdndisplay = <React.Fragment>
                    <span>MDN</span>
                    <a className={`darken`} target="_blank" rel="noopener noreferrer" href={entry.mdnpagelink} ><img src={entry.mdnimagelink} alt={`MDN results from the ${entry.term} search`}/></a>
                    <br/>
                </React.Fragment>
            }
            else mdndisplay = null

            let reactdisplay
            if (entry.reactimagelink.startsWith('http')) {
                reactdisplay = <React.Fragment>
                    <span>React</span>
                    <a className={`darken`} target="_blank" rel="noopener noreferrer" href={entry.reactpagelink} ><img src={entry.reactimagelink} alt={`React results from the ${entry.term} search`}/></a>
                </React.Fragment>
            }
            else reactdisplay = null
            return (<li className="DocsListItem" key={i} >
                {mdndisplay}
                {reactdisplay}
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