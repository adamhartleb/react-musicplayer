import React, { Component } from 'react'
import { Gallery } from './Gallery'

export default class ArtistProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioURL: null,
      playing: false,
      audio: null
    }
    this.playAudio = this.playAudio.bind(this)
  }

  playAudio(url) {
    let audio = new Audio(url)
    if (!this.state.playing) {
      audio.play()
      this.setState({
        audioURL: url,
        playing: true,
        audio
      })
    } else {
      if (this.state.playing && this.state.audioURL !== url) {
        this.state.audio.pause()
        audio.play()
        this.setState({
          audioURL: url,
          playing: true,
          audio
        })
      } else {
        this.setState({
          audioURL: '',
          playing: false,
          audio: this.state.audio.pause()
        })
      }
    }
  }

  render() {
    if (!this.props.tracks) return <h3 className="before title is-3">Search for your favorite Artist</h3>
    return (
      <div>
        <div className="columns profile">
          <div className="column">
            <h3 className="title is-3">Artist</h3>
          </div>
        </div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <img src={this.props.artist.artists.items[0].images[1].url} />
            </div>
            <div className="media-content">
              <div className="content">
                <h3 className="title is-3">{this.props.artist.artists.items[0].name}</h3>
              </div>
            </div>
          </article>
        </div>
        <div className="columns is-multiline is-mobile">
          {this.props.tracks.tracks.map((track, idx) => {
            return <Gallery key={idx} play={this.playAudio} track={track} />
          })}
        </div>
      </div>
    )
  }
}