import React, { useState } from 'react';
import { FaPlus, FaMinus, FaAsterisk } from "react-icons/fa";
import { TbSlash } from "react-icons/tb";
import './Calculator.css'
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
      const num1 = Number(number1)
      const num2 = Number(number2)

    // check validation retirn true or false
    if(validation()){
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
        setErrorMessage('')
      }

    }else{
      if(number1 === ''){
        setErrorMessage('Num1 cannot be empty');
        setSuccessMessage('')
        setResult('')
      } 
      if(number2 === ''){
        setErrorMessage('Num2 cannot be empty')
        setSuccessMessage('')
        setResult('')
      }
      if(number1==='' && number2===''){
        setErrorMessage("numbers can't be empty")
        setSuccessMessage('')
        setResult('')
      }
      if(isNaN(number1) || isNaN(number2)){
        setErrorMessage('Please enter valid input')
        setSuccessMessage('')
        setResult('')

      }
    }
  }
  

// validation function
function validation(){
  if(number1 === '' || number2 === '' || isNaN(number1) || isNaN(number2)){
    return false;
  }else{
    return true;
  }
}










  return (
    <div className="calculator-container">
      <div className="operation-box">
        <h2>React Calculator</h2>
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
        <div className="button-field">
          <button className='b' onClick={() => performOperation('add')}><FaPlus /></button>
          <button className='b' onClick={() => performOperation('subtract')}><FaMinus /></button>
          <button className='b' onClick={() => performOperation('multiply')}><FaAsterisk /></button>
          <button className='b' onClick={() => performOperation('divide')}><TbSlash /></button>

        </div>

      </div>
      
      {/* Error message */}
      {errorMessage && <p className="error">{errorMessage}</p>}

      {/* Result and success message */}
      {successMessage && <p className="success">{successMessage}</p>}
      {result && <p className="result">Result:- <span>{result}</span></p>}
    </div>
  );
};

export default Calculator;