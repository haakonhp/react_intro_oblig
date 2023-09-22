import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import React, { useState } from 'react';
import Alert from './components/Alert';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isClicked, setClicked] = useState(false);
  const food = ['Pizza', 'Hamburger', 'Coke'];

  return (
    <div>
      <p>Read the README.md to see the tasks</p>
      <MyComponent />
      <Wrapper>
        <h1>This is a child component</h1>
        <p>More child content here</p>
        <ul>
          <Food food={food} />
        </ul>
        <Alert
          updateFunction={setInputValue}
          toggleVisible={setClicked}
        ></Alert>
        {isClicked ? <p>{inputValue}</p> : ''}
      </Wrapper>
    </div>
  );
};

export default App;
