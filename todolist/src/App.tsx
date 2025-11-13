import React from 'react';
import logo from './logo.svg';
import './App.css';
// 예시
function App() {
  let name = '랙';
  const style = {
    backgroundColor: 'black',
    padding: '20px',
  };
  return (
    <div style={style} className='App'>
      <h1
        className='test'
        style={{ backgroundColor: 'black', padding: '20px' }}
      >
        {/*주석도써쪄요*/}
        Hello,{name === '리액트' ? <h1>YES</h1> : null}||
      </h1>
      <p>반캅습니다</p>
    </div>
  );
  // const port = undefined;
}
/*
function App() {
  return (
    React.createElement('div', null, 'Hello 리액트'),
    React.createElement('p', null, '방가리')
  );
}*/
export default App;
