import './App.css';
import Homepage from './components/Homepage';
import './components/Login'
// import Login from './components/Login';

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
      <div className='App-header'>
        <Homepage></Homepage>
        {/* <Login></Login> */}
      </div>
      
    </div>
    
  );
}

export default App;