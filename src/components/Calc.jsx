import '../makeup/Calc.css'
import {useState } from "react";
const Calc = () => {

const [num1, setNum1] = useState('')
const [num2, setNum2] = useState('')
const [result, setResult] = useState('')
const [eMsg, setEMsg] = useState('')
const [eMsg1, setEMsg1] = useState('')

const handleNum1 = (e) => {
    setNum1(e.target.value);
}
const handleNum2 = (e) => {
    setNum2(e.target.value);
}

function isDigit(input) {
    return !isNaN(input);
  }

function sum(){
    if(!num1  || !isDigit(num1))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num1 Cannot Be Empty')
    }
    else if(!num2  || !isDigit(num1))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num2 Cannot Be Empty')
    }
    else if(!isDigit(num1) || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Please Enter Valid Input')
    }
    else{
           setEMsg1('')
           setEMsg("Success!")
           setResult("Result - " + (parseInt(num1) + parseInt(num2)));
    }
}
function minus(){
    if(!num1 || !isDigit(num1))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num1 Cannot Be Empty')
    }
    else if(!num2 || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num2 Cannot Be Empty')
    }
    else if(!isDigit(num1) || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Please Enter Valid Input')
    }
    else{
           setEMsg1('')
           setEMsg("Success!")
           setResult("Result - " + (parseInt(num1) - parseInt(num2)));
    }
}
function multiply(){
    if(!num1 || !isDigit(num1))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num1 Cannot Be Empty')
    }
    else if(!num2 || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num2 Cannot Be Empty')
    }
    else if(!isDigit(num1) || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Please Enter Valid Input')
    }
    else{
           setEMsg1('')
           setEMsg("Success!")
           setResult("Result - " + (parseInt(num1) * parseInt(num2)));
    }
}
function divide(){
    if(!num1 || !isDigit(num1))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num1 Cannot Be Empty')
    }
    else if(!num2 || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Num2 Cannot Be Empty')
    }
    else if(!isDigit(num1) || !isDigit(num2))
    {
        setEMsg1("Error!")
        setEMsg('');
        setResult('Please Enter Valid Input')
    }
    else{
           setEMsg1('')
           setEMsg("Success!")
           setResult("Result - " + (parseInt(num1) / parseInt(num2)));
    }
}


    return (
        <div>
            <center>
                <div className='g-parent'>
        <div className='parent'>
            
             <h1>React Calculator</h1>

            <div className='input-box'>
            <input type='text' name='num1'
            placeholder='Num1'
            value={num1}
            onChange={handleNum1} />
             <br />
             <input ype='text' name='num2'
             placeholder='Num2'
            value={num2}
            onChange={handleNum2} />
            </div>

             <div className='button-box'>
                <button type='button' onClick={sum}>+</button>
                <button type='button' onClick={minus}>-</button>
                <button type='button' onClick={multiply}>*</button>
                <button type='button' onClick={divide}>/</button>
             </div>

             <div className='e-msg-box'>
                <p id='e-msg-1'>{eMsg}</p>
                <p id='e-msg-2'>{eMsg1}</p>
                <p id='result'>{result}</p>
             </div>
        </div>
        </div>
        </center>
        </div>
    );
}

export default Calc;