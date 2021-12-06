import React, {useState} from 'react';

export default function Counterbutton () {
  const [clickAmount, setClickAmount] = useState(0);
  return (
    <button className="CounterButton">
    You clicked me {clickAmount} times
  </button>
  );
}