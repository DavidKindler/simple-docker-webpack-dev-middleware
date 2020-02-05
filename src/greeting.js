import React from 'react';

export default class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='greeting'>
        Howdy!, {this.props.name}!
      </div>
    );
  }
}