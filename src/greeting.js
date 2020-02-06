import { hot } from 'react-hot-loader/root';
import React from 'react';
class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='greeting'>
        Howdy, {this.props.name}!
      </div>
    );
  }
}


export default hot(Greeting);