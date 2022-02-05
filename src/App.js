import Dashboard from './Dashboard';
import Preferences from './Preferences';
import Login from './Login';
import { useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState('');
  if (!token) {
     return <Login setToken={setToken}/>
  } 
  return (
    <div>
      <h1>Application</h1>
  <Router>
    <>
    <Routes>
     <Route exact path='/dashboard' element={<Dashboard/>}/>
     <Route exact path='/preferences' element={<Preferences/>}/>
    </Routes>
    </>
  </Router>
    </div>
  )
}

export default App;
