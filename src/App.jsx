import { useState, useEffect } from 'react';

// ✅ Custom Hook

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
    
  });


  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);


  
  return [value, setValue];
}


function App() {

  
  // ✅ Use custom hook for both fields
  const [username, setUsername] = useLocalStorageState('username', '');
  
  const [color, setColor] = useLocalStorageState('color', '');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>Welcome!</h1>

      <InputWithLabel
        id="username"
        value={username}
        onInputChange={handleUsernameChange}
      >
        
        Username:
      </InputWithLabel>

      
      
      <InputWithLabel
        id="color"
        value={color}
        onInputChange={handleColorChange}
      >
        
        Favorite Color:
      </InputWithLabel>

      
      
      <p>Hello, {username || 'Guest'}!</p>
      {color && <p>Your favorite color is {color}.</p>}
    </div>
  );
}



function InputWithLabel(props) {
  
  return (
    <>
      
      <label htmlFor={props.id}>{props.children}</label>
      <input
        id={props.id}
        type="text"
        value={props.value}
        onChange={props.onInputChange}
        
      />
    </>
  );
}

export default App;
