import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import useToken from './useToken';

const App = () => {
  
  const {token, setToken } = useToken();//{token is null at first, setToken sets the new token after login details input }

  if (!token) {
     return <Login setToken={setToken}/>
  } 
  return (
    <div>
      <h1>Application</h1>
  <Router>
    <>
    <Routes>
     <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  </Router>
    </div>
  )
}

export default App;
