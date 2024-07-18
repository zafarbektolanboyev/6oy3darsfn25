import React, { useState } from 'react';
import '../Tabs/index.css';

export default function Tabs() {
  const fruits = ['olma', 'anor', 'anjir', 'ananas'];
  const cars = ['tesla', 'nexia', 'jiguli', 'jetour'];
  const numbers = [1, 2, 3, 4, 5];
  const [selectedData, setSelectedData] = useState([]);

  const showData = (data) => {
    setSelectedData(data);
  };

  return (
    <>
      <div className='Buttons container'>
        <button onClick={() => showData(fruits)}>Fruits</button>
        <button onClick={() => showData(cars)}>Cars</button>
        <button onClick={() => showData(numbers)}>Numbers</button>
      </div>
      <ul>
        {selectedData.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}
