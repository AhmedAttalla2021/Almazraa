import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import { Login } from './pages/login/Login';
import { CreateAccount } from './pages/createAccount/CreateAccount';

function App() {
  return (
    <>
    <Router>
      <Routes>

       <Route path='/' element={<Login />}/>
       <Route path='/create-account' element={<CreateAccount />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
