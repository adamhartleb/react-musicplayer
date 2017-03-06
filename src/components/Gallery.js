import React, { Component } from 'react'

export const Gallery = ({ track, play }) => {
  return (
    <div className="album column is-one-quarter">
      <img onClick={() => play(track.preview_url)}
        src={track.album.images[1].url} 
      />
      <h4 className="subtitle is-4">{track.name}</h4>
    </div>
  )
}