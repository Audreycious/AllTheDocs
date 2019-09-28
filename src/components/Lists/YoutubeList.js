import React from 'react';

function YoutubeList(props) {    
    const listItems = props.data.map((string, i) => {        
        return (<li className="YoutubeListItem" key={i} >
            <a href={string || null} >Link</a>
        </li>)
    })

    return (
        <ul className="YoutubeList" >
            {listItems}
        </ul>
    )
}

YoutubeList.defaultProps = {
    data: []
}

export default YoutubeList