import React from 'react';

function YoutubeList(props) {    
    const listItems = props.data.map((video, i) => {        
        return (<li className="YoutubeListItem" key={i} >
            <a href={video.url || null} ><img src={video.thumbnail} alt={video.title} target="_blank"/></a>
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