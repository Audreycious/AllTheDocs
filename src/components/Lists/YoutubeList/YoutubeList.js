import React from 'react';
import './YoutubeList.css'


function YoutubeList(props) {    
    const listItems = props.data.map((video, i) => {        
        return (<li className="YoutubeListItem" key={i} >
            <button className={`darken`} onClick={()=> window.open(video.url, "_blank")}><img src={video.thumbnail} alt={video.title}/></button>
            <p>{video.title}</p>
        </li>)
    })
    let display
    if (props.data.length === 0) {
        display =  `Enter search term to see Youtube videos here`
    }else {
        display = <ul className="YoutubeList" >{listItems}</ul>
    }
    
    return (
        <React.Fragment>
            {display}
        </React.Fragment>
    )
}

YoutubeList.defaultProps = {
    data: []
}

export default YoutubeList