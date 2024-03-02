import React from "react";

export default function Input({ name, placeholder, handleInput }) {
  return (
    <div>
      <input
        name={name}
        onChange={handleInput}
        className="input-field"
        placeholder={placeholder}
      />
    </div>
  );
}
