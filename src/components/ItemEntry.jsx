import React, { useState, useEffect } from 'react';
import './ItemEntry.css';

function ItemEntry({ personIndex, onDone }) {
  const [name, setName] = useState('');
  const [numItems, setNumItems] = useState('');
  const [items, setItems] = useState([]);
  const [showVerdicts, setShowVerdicts] = useState(false);

  useEffect(() => {
    if (numItems > 0) {
      const rows = Array.from({ length: Number(numItems) }, () => ({
        itemName: '',
        cost: '',
        paid: '',
        verdict: ''
      }));
      setItems(rows);
      setShowVerdicts(false);
    }
  }, [numItems]);

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const handleDone = () => {
    const updatedItems = items.map(item => {
      const cost = Number(item.cost);
      const paid = Number(item.paid);
      let verdict = '';

      if (paid < cost) verdict = `underpaid by ${cost - paid}`;
      else if (paid > cost) verdict = `overpaid by ${paid - cost}`;
      else verdict = 'no dues';

      return { ...item, verdict };
    });

    setItems(updatedItems);
    setShowVerdicts(true);
  };

  const handleNext = () => {
    if (showVerdicts) {
      const personData = {
        name,
        items
      };
      onDone(personData);

      setName('');
      setNumItems('');
      setItems([]);
      setShowVerdicts(false);
    }
  };

  return (
    <div className="itemEntry">
      <h2>person {personIndex + 1}</h2>

      <label>name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <label>how many items?</label>
      <input 
        type="number" 
        value={numItems} 
        onChange={(e) => setNumItems(e.target.value)} 
        min="1"
      />

      {items.length > 0 && (
        <table className="itemTable">
          <thead>
            <tr>
              <th>item</th>
              <th>cost</th>
              <th>paid</th>
              <th>verdict</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td data-label="item">
                  <input
                    type="text"
                    value={item.itemName}
                    onChange={(e) => handleItemChange(idx, 'itemName', e.target.value)}
                  />
                </td>
                <td data-label="cost">
                  <input
                    type="number"
                    value={item.cost}
                    onChange={(e) => handleItemChange(idx, 'cost', e.target.value)}
                  />
                </td>
                <td data-label="paid">
                  <input
                    type="number"
                    value={item.paid}
                    onChange={(e) => handleItemChange(idx, 'paid', e.target.value)}
                  />
                </td>
                <td data-label="verdict">{item.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="buttonRow">
        <button className="doneBtn" onClick={handleDone}>
          done
        </button>
        <button
          className="doneBtn"
          onClick={handleNext}
          disabled={!showVerdicts}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default ItemEntry;
