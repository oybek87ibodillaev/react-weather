import React from 'react';
import '../buttonStyle.css';

const Button = (props) => {
  const { type, func = null, value } = props;
  return (
    <div>
      <button type={type} onClick={func} className="btn">
        {value}
      </button>
    </div>
  );
};

export default Button;