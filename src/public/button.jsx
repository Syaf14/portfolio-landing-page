import React from 'react';
import './button.css';

function CustomButton({ label, onClick }) {
  return (
    <button className="pill-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default CustomButton;