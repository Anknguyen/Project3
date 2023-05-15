import './App.css';
import CreateContent from './components/CreateContent';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (<ApolloProvider client={client}>
    <div className="App">
      <div className="Nav">
        <div className="title">
          <h1>Jet Reviews</h1>
        </div>
        <div className="NavItems">
          <h5 className="NavItem">Search</h5>
          <h5 className="NavItem">Genres</h5>
          <h5 className="NavItem">Profile</h5>
          <h5 className="NavItem">Login</h5>
        </div>
      </div>
      <div className='App-header'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/content" element={<Content />} /> */}
          <Route path="/createContent" element={<CreateContent />} />
        </Routes>
      </Router>
      </div>
      
    </div>
    </ApolloProvider>
  );
}

export default App;
{
  /* <div className="App-header">
        <div className="loginForm">
          <div className="loginContrast">
            <label for="email"><strong>Email:</strong></label>
            <input type="text" id="email" name="email"></input><br></br><br></br>
            <label for="password"><strong>Password:</strong></label>
            <input type="password" id="password" name="password"></input><br></br><br></br>
            <button>Sign in</button>
            <button>Create an account</button>
          </div>
          
        </div> */
}
