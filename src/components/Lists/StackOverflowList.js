import React from 'react';

function StackOverflowList(props) {    
    const listItems = props.data.map((result, i) => {        
        return (<li className="StackOverflowListItem" key={i} >
            <a href={result.link || null} target="_blank">{result.title}</a>
        </li>)
    })

    return (
        <>
        <ul className="StackOverflowList" >
            {listItems}
        </ul>
        </>
    )
}

StackOverflowList.defaultProps = {
    data: []
}

export default StackOverflowList