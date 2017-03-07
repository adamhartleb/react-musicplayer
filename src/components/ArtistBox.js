import React from 'react'

export const ArtistBox = ({ artist, title }) => {

  let playingTitle = title ? `Now playing: ${title}` : null

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <img src={artist.artists.items[0].images[1].url}/>
        </div>
        <div className="media-content">
          <div className="content">
            <h3 className="title is-3">{artist.artists.items[0].name}</h3>
            <h4 className="subtitle is-4">Followers: {artist.artists.items[0].followers.total}</h4>
            <br/>
            <h4 className="subtitle is-4">
              <strong>{playingTitle}</strong>
            </h4>
          </div>
        </div>
      </article>
    </div>
  )
}