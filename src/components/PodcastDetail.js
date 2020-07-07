import React from 'react';
const PodcastDetail = ({podcast}) => {
    if(!podcast) return null;

    return (
        <>
        <h2><a href={podcast.artistUrl}>Podcast {podcast.name}</a></h2>
        <h3>Release Date {podcast.releaseDate}</h3>
        <img src={podcast.artworkUrl100}></img>
        </>
    )

}

export default PodcastDetail;