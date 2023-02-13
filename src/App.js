import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import { Login } from './pages/login/Login';

function App() {
  return (
    <>
    <Router>
      <Routes>

       <Route path='/' element={<Login />}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
