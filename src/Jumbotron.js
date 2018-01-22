import React from 'react';

export const Jumbotron = props => {
  return <div className="jumbotron">
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p>{props.body}</p>
    {props.buttons}
  </div>
}

