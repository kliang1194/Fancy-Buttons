import React, {useState} from 'react';

export default function LightSwitchButton(props) {
  const {light, switchLight } = props;
  const handleClick = () => switchLight();
  

  return (
    <button onClick={props.switchLight} className="LightSwitchButton">
      {props.light === 'on' && <span><i>💡</i> I'm on!</span>}
      {props.light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}