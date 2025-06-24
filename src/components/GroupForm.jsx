import React from 'react';
import './GroupForm.css'; // or './EnterDetails.css' depending on what you named it
function EnterDetails() {
  return (
    <div className="inputForm">
      <div className="formRow">
        <label htmlFor="groupName">group name:</label>
        <input type="text" id="groupName" placeholder="enter group name" />
      </div>

      <div className="formRow">
        <label htmlFor="numPeople">no. of people:</label>
        <input type="number" id="numPeople" placeholder="two or more" min="2" />
      </div>

      <button className="submitDetails">submit</button>
    </div>
  );
}

export default EnterDetails;
