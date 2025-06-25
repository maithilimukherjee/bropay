import { useState, useRef } from 'react';
import Header from './components/Header';
import EnterDetails from './components/GroupForm';
import ItemEntry from './components/ItemEntry';

import './components/Header.css';
import './components/GroupForm.css';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [numPeople, setNumPeople] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(0);
  const [allPeopleData, setAllPeopleData] = useState([]);

  const nextSectionRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  const handleContinue = () => {
    setShowNext(true);
    setTimeout(() => {
      nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const handleItemEntryDone = (personData) => {
    setAllPeopleData(prev => [...prev, personData]);
    setCurrentPerson(prev => prev + 1);

    setTimeout(() => {
      nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className="App">
      <Header onToggleTheme={toggleTheme} />

      <EnterDetails
        onContinue={handleContinue}
        setGroupName={setGroupName}
        setNumPeople={setNumPeople}
      />

      {showNext && (
        <div
          id="nextSection"
          ref={nextSectionRef}
          style={{ padding: '2rem', textAlign: 'center' }}
        >
          <h2>group: {groupName}</h2>
          <p>total no of members: {numPeople}</p>
          

          {currentPerson < numPeople ? (
            <ItemEntry
              key={currentPerson}
              personIndex={currentPerson}
              onDone={handleItemEntryDone}
            />
          ) : (
            <div className="summary">
              <h2>final verdicts</h2>
              <p>here's what each person paid and what they owe:</p>
              <div className="verdict-summary">
  {allPeopleData.map((person, index) => (
    <div key={index} className="person-summary">
      <h3>{person.name}</h3>
      <ul>
        {person.items.map((item, idx) => (
          <li key={idx}>
            <strong>{item.itemName}</strong> — paid ₹{item.paid}, cost ₹{item.cost} ➜ <em>{item.verdict}</em>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
