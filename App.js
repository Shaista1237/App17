import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputArray, setInputArray] = useState('');
  const [isSorted, setIsSorted] = useState('');

  const checkIfSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const handleCheck = () => {
    const arr = inputArray.split(',').map((num) => parseFloat(num.trim()));
    if (arr.some(isNaN)) {
      setIsSorted('Please enter valid numbers separated by commas');
    } else {
      const sorted = checkIfSorted(arr);
      setIsSorted(sorted ? 'The array is sorted in ascending order' : 'The array is not sorted in ascending order');
    }
  };

  return (
    <div className="App">
      <h1>Check if Array is Sorted in Ascending Order</h1>
      <input
        type="text"
        value={inputArray}
        onChange={(e) => setInputArray(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{isSorted}</p>
    </div>
  );
}

export default App;
