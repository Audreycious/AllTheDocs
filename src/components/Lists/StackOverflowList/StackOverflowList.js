import React from 'react';

function StackOverflowList(props) {    
    const listItems = props.data.map((result, i) => {        
        return (<li className="StackOverflowListItem" key={i} >
            <a href={result.link || null} target="_blank" rel="noopener noreferrer" >{result.title}</a>
        </li>)
    })
    let display
    if (props.data.length === 0) {
        display =  `Enter search term to see StackOverflow questions here`
    }else {
        display = <ul className="StackOverflowList" >{listItems}</ul>
    }
    
    return (
        <React.Fragment>
            {display}
        </React.Fragment>
    )
}

StackOverflowList.defaultProps = {
    data: []
}

export default StackOverflowList