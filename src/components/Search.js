import React, { Component } from 'react'

export const Search = ({search, updateSearch, getTracks}) => {
  return (
    <div>
      <h1 className='title is-1'>Adam's Music Player</h1>
      <div className='search control has-addons'>
        <input
          className='is-large input is-expanded'
          type='text'
          value={search}
          onInput={e => updateSearch(e)}
          onKeyPress={e => (e.charCode === 13)
                        ? getTracks()
                        : null} />
        <button onClick={() => getTracks()} className='is-large button is-info'>
          Search
        </button>
      </div>
    </div>
  )
}
