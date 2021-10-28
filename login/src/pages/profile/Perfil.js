import{ useHistory} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth/useAuth';
import './style.css'


function Perfil() {
  const history = useHistory()
  const {token, logout} = useAuth()

  return (
    <div className="perfil">
      <div className="links">
        <button onClick={()=>logout(()=>history.push('/'))}>Home</button>
        <button onClick={()=>logout(()=>history.push('/login'))}>Login</button>
      </div>
      <div className="profile">
        <img src={token.avatar_url} alt="foto perfil" />
        <div className="dados">         
          <span>{token.name}</span>
          <p>{token.login}</p>
          <p>{token.bio}</p>
          <p>{token.blog}</p>
          <div className="follow">
            <p>{token.followers} Followers</p>
            <p>{token.following} Following</p>
          </div>
          <p>{token.public_repos}  Public Repository</p>
        </div>
        
      </div>     
    </div>
  );
}

export default Perfil;