import React from 'react';

export const HeaderWrapper = props => {
  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.desc} </p>
    </div>
  )
}
