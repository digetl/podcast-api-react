import React from 'react';

const PodcastSelect = (props) => {

    const options = props.podcasts.map(podcast => {
        return <option value={podcast.id} key={podcast.id}>{podcast.name}</option>
    })

    function handleChange(event){
        props.onPodcastSelected(event.target.value);
    }

  return(
      <select id="podcast-select" defaultValue="default" onChange={handleChange}>
          <option disabled value="default">Choose a podcast...</option>
          {options}
      </select>
  )
}

export default PodcastSelect;