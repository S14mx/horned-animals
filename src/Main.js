import React from 'react';
import HornedBeast from './HornedBeast';
import unicorn from './unicorn.jfif';
import rhino from './rhino.jfif';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Unicorn'} description={'Just like a horse but with a horn'} src={unicorn} alt={'image of a unicorn'} />
        <HornedBeast title={'Rhino'} description={'Funky cow with a horn'} src={rhino}  alt={'image of a rhino'}/>
      </>
    );
  }
}

export default Main;
