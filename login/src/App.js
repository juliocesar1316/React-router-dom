import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Perfil from './pages/profile/Perfil';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { useAuth } from './hooks/useAuth/useAuth';
import { AuthProvider } from './contexts/AuthContext/AuthContext';

function PaginasProtegidas(props){
  const {token} = useAuth();
return(
  <Route render={()=>token ? props.children : <Redirect to='/login'/> } />  
)}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <div className="main">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" component={Login}/>
              <PaginasProtegidas>
                <Route path='/profile' component={Perfil}/>
              </PaginasProtegidas>           
            </Switch>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
