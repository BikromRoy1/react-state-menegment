import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Parent from './Components/Parent';
import { createContext, useState } from 'react';
import Login from './Components/Login';
import ContactFrom from './Components/ContactFrom';


export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className=''>
        {/* <Login></Login> */}
        {/* <Counter></Counter> */}
        <ContactFrom></ContactFrom>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
