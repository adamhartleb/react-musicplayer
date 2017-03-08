import React, { Component } from 'react'
import { Search } from './Search'
import ArtistProfile from './ArtistProfile'

const URL = 'https://api.spotify.com/v1/'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: '',
      artist: null,
      tracks: null
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.getTracks = this.getTracks.bind(this)
  }

  updateSearch (e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  getTracks () {
    fetch(`${URL}search?q=${this.state.searchTerm}&type=artist&limit=1`)
      .then(response => {
        response.json().then(json => {
          let artist = json
          // IF ARTIST EXISTS, GET TOP 10 TRACKS
          if (json.artists.items.length !== 0) {
            fetch(`${URL}artists/${json.artists.items[0].id}/top-tracks?country=US`)
              .then(response => {
                response.json().then(json => {
                  this.setState({
                    tracks: json,
                    artist,
                    searchTerm: ''
                  })
                })
              })
          } else {
            // IF ARTIST DOES NOT EXIST RETURN NULL FOR TRACKS FOR CONDITIONAL RENDERING
            this.setState({
              artist,
              tracks: null
            })
          }
        })
      })
  }

  render () {
    const { searchTerm, artist, tracks } = this.state
    return (
      <div className='container'>
        <Search search={searchTerm} updateSearch={this.updateSearch} getTracks={this.getTracks} />
        <ArtistProfile artist={artist} tracks={tracks} />
      </div>
    )
  }
}
