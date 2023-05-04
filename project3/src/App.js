import './App.css';
import './components/Login'
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <div className="title">
          <h1>Name Of Site</h1>
        </div>
        <div className="NavItems">
          <p className="NavItem">Search</p>
          <p className="NavItem">Genres</p>
          <p className="NavItem">Profile</p>
          <p className="NavItem">Login</p>
        </div>
      </div>
      <div className="App-header">
        <div className="loginForm">
          <div className="loginContrast">
            <label for="email"><strong>Email:</strong></label>
            <input type="text" id="email" name="email"></input><br></br><br></br>
            <label for="password"><strong>Password:</strong></label>
            <input type="password" id="password" name="password"></input><br></br><br></br>
            <button>Sign in</button>
            <button>Create an account</button>
          </div>
          
        </div>
      </div>
      <Login></Login>
    </div>
    
  );
}

export default App;
