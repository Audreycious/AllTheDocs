import React from 'react';
import './YoutubeList.css'


function YoutubeList(props) { 
    let display
    if (props.data === 'noresults') {
        display = `Sorry, no results`
    }
    else {   
        const listItems = props.data.map((video, i) => {        
            return (<li className="YoutubeListItem" key={i} >
                <div className='youtube-li-top'>
                    <button className={`darken`} onClick={()=> window.open(video.url, "_blank")}><img src={video.thumbnail} alt={video.title}/></button><div className='youtube-li-buffer'></div>
                </div>
                <p>{video.title}</p>
            </li>)
        })
        if (props.data.length === 0) {
            display =  `Enter search term to see Youtube videos here`
        }else {
            display = <React.Fragment> <span>Youtube links here:</span> <ul className="YoutubeList" >{listItems}</ul> </React.Fragment>
        }
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