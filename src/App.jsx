import { useState } from 'react';
import Header from './components/Header';
import EnterDetails from './components/GroupForm';
import './components/Header.css';
import './components/GroupForm.css';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="App">
      <Header onToggleTheme={toggleTheme} />
      <EnterDetails />
    </div>
  );
}

export default App;
