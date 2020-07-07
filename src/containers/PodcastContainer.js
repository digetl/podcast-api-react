import React from 'react';
import PodcastSelect from '../components/PodcastSelect';
import PodcastDetail from '../components/PodcastDetail';

class PodcastContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        podcasts: [],
        selectedPodcastID: ''
    };

    this.handlePodcastSelected = this.handlePodcastSelected.bind(this);

}

componentDidMount() {
    const url = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/25/explicit.json'

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({podcasts: data.feed.results}))
}

handlePodcastSelected(id){
    this.setState({selectedPodcastID: id})
    }

    render(){
        const selectedPodcast = this.state.podcasts.find(podcasts => {
            return podcasts.id === this.state.selectedPodcastID
        });

        return (
            <div>
                <h2>Podcast Old Grey Whistle Test</h2>
                <PodcastSelect
                podcasts={this.state.podcasts}
                onPodcastSelected={this.handlePodcastSelected}
                />
                <PodcastDetail
                podcast ={selectedPodcast}
                />
            </div>
        );
     }
}

export default PodcastContainer;
