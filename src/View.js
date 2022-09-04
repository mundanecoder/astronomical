import React from 'react'

const View = (match) => {
  return (
    <div>View {match.Params.name}</div>
  )
}

export default View