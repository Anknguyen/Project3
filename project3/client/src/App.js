import './App.css';
import CreateContent from './components/CreateContent';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <div className="title">
          <h1>Name Of Site</h1>
        </div>
        <div className="NavItems">
          <h5 className="NavItem">Search</h5>
          <h5 className="NavItem">Genres</h5>
          <h5 className="NavItem">Profile</h5>
          <h5 className="NavItem">Login</h5>
        </div>
      </div>
      <div className='App-header'>
      </div>
      
    </div>
    
  );
}

export default App;