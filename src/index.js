// Import the React and ReactDom Libreries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = {
    text: 'Click me',
  };
  const lableText = 'Enter Name:';

  return (
    <div>
      <lable className='lable' htmlFor='name'>
        {' '}
        {lableText}{' '}
      </lable>{' '}
      <input id='name' type='text' />
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        {' '}
        {buttonText.text}{' '}
      </button>{' '}
    </div>
  );
};
ReactDom.render(<App />, document.querySelector('#root'));
