import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Mint from './Pages/Mint'
import Home from './Pages/Home'

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/mint'element={<Mint/>}/>
      </Routes>
    </Router>      
    
  );
}

export default App;
