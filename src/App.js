import './App.css';
import { Nav, Home, Footer, Portfolio, Contact, Resume } from './components';
import { useState } from 'react';

const App = () => {
  const [ page, setPage ] = useState('about')

  return(
  <div className="App">
      <Nav setPage = {setPage} />
      {
        page == 'about' ?
          <Home /> :
        page == 'portfolio' ?
          <Portfolio /> :
        page == 'contact' ?
          <Contact /> :
          <Resume />
      }
      <Footer />
    </div>
  )
}


export default App;
