import React from 'react'
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = 'AIzaSyAxelDIu6_SmpQymb3zOg5s6722da0pdhU';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchSubmit("buildings")
    }

    onSearchSubmit = async (term) => {
        const response = await Youtube.get('/search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video})
    };

    render(){
        return (<div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className='row'>
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App