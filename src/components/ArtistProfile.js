import React, { Component } from 'react'
import { Gallery } from './Gallery'
import { ArtistBox } from './ArtistBox'

export default class ArtistProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioURL: null,
      title: '',
      playing: false,
      audio: null
    }
    this.playAudio = this.playAudio.bind(this)
  }

  playAudio(url, name) {
    let audio = new Audio(url)
    if (!this.state.playing) {
      audio.play()
      this.setState({
        audioURL: url,
        title: name,
        playing: true,
        audio
      })
    } else {
      if (this.state.playing && this.state.audioURL !== url) {
        this.state.audio.pause()
        audio.play()
        this.setState({
          audioURL: url,
          title: name,
          playing: true,
          audio
        })
      } else {
        this.setState({
          audioURL: '',
          title: '',
          playing: false,
          audio: this.state.audio.pause()
        })
      }
    }
  }

  render() {
    const { artist, tracks } = this.props
    // INITIAL SEARCH
    if (!artist) return <h3 className="before title is-3">Search for your favorite Artist.</h3>
    // IF ARTIST DOES NOT EXIST
    if (!tracks) return <h3 className="before title is-3">Oops! That artist does not exist, please check your spelling.</h3>


    return (
      <div>
        <div className="columns profile">
          <div className="column">
            <h3 className="title is-3">Artist</h3>
          </div>
        </div>
        <ArtistBox title={this.state.title} {...this.props} />
        <div className="columns is-multiline is-mobile">
          {tracks.tracks.map((track, idx) => {
            return <Gallery key={idx} play={this.playAudio} track={track} />
          })}
        </div>
      </div>
    )
  }
}