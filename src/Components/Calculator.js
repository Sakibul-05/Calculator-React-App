import React, { useState } from 'react';
import { FaPlus, FaMinus, FaAsterisk } from "react-icons/fa";
import { TbSlash } from "react-icons/tb";
const Calculator = () => {
  // State for input fields
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  // State for result and success message
  const [result, setResult] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle arithmetic operations
  const performOperation = (operation) => {
    // Convert input strings to numbers
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // Validate inputs
    if (isNaN(num2) && isNaN(num1) ) {
        setErrorMessage(
            <>
                        Error !<br/><br/>
                Please enter valid Num 1 and Num 2

            </>
        );
        setResult('');
        setSuccessMessage('');
    }
    else if (isNaN(num1) ) {
      setErrorMessage(
        <>
            Error !<br/><br/>
            Please enter valid Num 1.

        </>
      );
      setResult('');
      setSuccessMessage('');
    } else if (isNaN(num2) ) {
        setErrorMessage(
        <>
            Error !<br/><br/>
            Please enter valid Num 2

        </>
        );
        setResult('');
        setSuccessMessage('');
    }  else {
      setErrorMessage('');

      // Perform operation and set result
      let operationResult;
      switch (operation) {
        case 'add':
          operationResult = num1 + num2;
          break;
        case 'subtract':
          operationResult = num1 - num2;
          break;
        case 'multiply':
          operationResult = num1 * num2;
          break;
        case 'divide':
          operationResult = num1 / num2;
          break;
        default:
          operationResult = '';
      }
      if(isNaN(operationResult)){
        setErrorMessage(
          <>
              Error !<br/><br/>
              Arithmetic exception
  
          </>
          );
        setSuccessMessage('');
        setResult('');

      }
      else{
        setResult(operationResult);
        setSuccessMessage('Success !');
      }
    }
  };

  return (
    <div className="calculator b-box">
         <h1>React Calculator</h1>
      {/* Input fields */}
      <input
        type="text"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Num 1"
      />
      <input
        type="text"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Num 2"
      />

      {/* Buttons for arithmetic operations */}
      <div className="btn">
        <button className='b' onClick={() => performOperation('add')}><FaPlus /></button>
        <button className='b' onClick={() => performOperation('subtract')}><FaMinus /></button>
        <button className='b' onClick={() => performOperation('multiply')}><FaAsterisk /></button>
        <button className='b' onClick={() => performOperation('divide')}><TbSlash /></button>

      </div>
      
      {/* Error message */}
      {errorMessage && <p className="error">{errorMessage}</p>}

      {/* Result and success message */}
      {successMessage && <p className="success">{successMessage}</p>}
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default Calculator;