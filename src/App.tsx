import React, { useState } from 'react';
import { Header } from './App.styled';
import QuoteList from './components/QuoteList';
import NewQuote from './components/NewQuote';

function App() {

  const [isPosting, setIsPosting] = useState(false);

  const closeModalHandler = () => {
    console.log(!isPosting);
    
    setIsPosting(false)
  };
  const showModalHandler = () => setIsPosting(true);

  return (
    <>
      <Header>
        <h3>Quote Keeper</h3>
        <button onClick={showModalHandler}>New Quote</button>
      </Header>
      {isPosting && 
        <NewQuote onClose={closeModalHandler} />
      }
      <QuoteList />
    </>
  );
}

export default App;
