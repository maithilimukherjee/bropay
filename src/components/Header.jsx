import { useReact} from 'react';
import './Header.css';

function Header({onToggleTheme})
{
    return (
        <header className='header'>
            <div className='toggle'>
                <button className='modeToggle' onClick={onToggleTheme}>🌙</button>
            </div>
            <h1 className='logo'>⪩⪨ bropay ⪩⪨</h1>
        </header>
    );
}
export default Header;