import{Link} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth/useAuth'
import './style.css'

function Home() {
const {logar} = useAuth();
  
return (
    <div className="home">  
      <div className="rotas">      
        <Link to='/login'>Login</Link>
        <Link to={logar ? '/profile': '/login'}> Meu Perfil</Link> 
      </div>
    </div>
  );
}

export default Home;