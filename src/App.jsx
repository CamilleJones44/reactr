import React from 'react';

const items = ['Apples', 'Bananas', 'Cherries', 'Grapes'];


function Header() {
  
  return <h1>My Grocery List y</h1>;
}

function List() {
  
  return (
    <ul>
      
      {items.map((item, index) => (
      
        <li key={index}>{item}</li>
      
      ))}

      
    </ul>
    
  );
}


function App() {
  
  return (
    <div>
      
      <Header />
      
      <List />
      <List />
      
    </div>
  );
}

export default App;
