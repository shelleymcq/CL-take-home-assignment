import './App.css';
import React from 'react';

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [conversionMode, setConversionMode] = React.useState('lowercase');
  // moved message from handleSubmit to default state
  const [textOutput, setTextOutput] = React.useState('Your formatted text will go here!');


  const handleRadioChange = event => {
    setConversionMode(event.target.value);
  }

  const handleTextareaChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // check conversion mode on submit and change case accordingly
    if(conversionMode === 'uppercase') {
      setTextOutput(textInput.toUpperCase());
    } else {
      setTextOutput(textInput.toLowerCase());
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        {/* changed btn type from 'button' to 'submit' */}
        <button type="submit">Submit</button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          {/* changed 'class' to 'className' in response to warning - still worked */}
          <output id="result" className="result">{textOutput}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
