import { useState } from 'react';

const ToggleTheme = () => {
    
  const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            setDarkMode(false);
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }
    return (
        <div onClick={toggleTheme} className='absolute top-0 right-0 text-2xl m-4 cursor-pointer'>
            {darkMode ? '🔆' : '🌙'}
        </div>
    )
}

export default ToggleTheme