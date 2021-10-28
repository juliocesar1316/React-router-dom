import { useAuth } from '../../hooks/useAuth/useAuth';
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import './style.css'


export default function Login(){
    const {logar, logout} = useAuth();
    const history = useHistory();
    const [correctUser, setCorrectUser] = useState(false)


    const handleSubmit = async (event) => {
        event.preventDefault();
        const userValue = event.target[0].value
        const result = await logar(userValue);   
        result ? history.push(`/profile/${userValue}`) : setCorrectUser(true); 

    }

    return (
        <div className='login'>
            <div className="rota">
                <button onClick={()=>logout(()=>history.push('/'))}>Home</button>
            </div>
            <div className="form">
                <form name="form" onSubmit={handleSubmit}>
                    <label>Usuário:</label>
                    <input type="text" name="usuario" />
                    <input type="submit" value="Entrar" />
                </form>
                {correctUser && (
                    <p>Usuario não encontrado</p>
                )}  
            </div>   
                  
        </div>
    );}