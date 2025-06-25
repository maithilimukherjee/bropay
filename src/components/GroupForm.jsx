import React, { useState } from 'react';
import './GroupForm.css';

function EnterDetails({ onContinue, setGroupName, setNumPeople }) {
  const [localGroupName, setLocalGroupName] = useState('');
  const [localNumPeople, setLocalNumPeople] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!localGroupName || !localNumPeople) {
      alert('fill both fields pls 💀');
      return;
    }

    setGroupName(localGroupName);
    setNumPeople(Number(localNumPeople)); 
    onContinue();
  };

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <div className="formRow">
        <label htmlFor="groupName">group name:</label>
        <input
          type="text"
          id="groupName"
          placeholder="enter group name"
          value={localGroupName}
          onChange={(e) => setLocalGroupName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <label htmlFor="numPeople">no. of people:</label>
        <input
          type="number"
          id="numPeople"
          placeholder="two or more"
          min="2"
          value={localNumPeople}
          onChange={(e) => setLocalNumPeople(e.target.value)}
        />
      </div>

      <button type="submit" className="submitDetails">submit</button>
    </form>
  );
}

export default EnterDetails;
