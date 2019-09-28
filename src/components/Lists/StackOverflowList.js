import React from 'react';

function StackOverflowList(props) {    
    const listItems = props.data.map((string, i) => {        
        return (<li className="StackOverflowListItem" key={i} >
            <a href={string || null} >Link</a>
        </li>)
    })

    return (
        <ul className="StackOverflowList" >
            {listItems}
        </ul>
    )
}

StackOverflowList.defaultProps = {
    data: []
}

export default StackOverflowList