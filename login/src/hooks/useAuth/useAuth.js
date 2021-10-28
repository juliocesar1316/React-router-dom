import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";

export function useAuth(){
    return useContext(AuthContext);
}

export function useAuthProvider(){
    const [token, setToken] = useState('');

    const logar = async (user) => {
        const result = await fetch(`https://api.github.com/users/${user}`);
        if (result.status === 200) {
           const data = await result.json()
            setToken(data);
            return true;
        } else {
            return false;
        }
    }
    
    const logout = (call) => {
        setToken(null);
        call()
    }

    return {
        token, 
        logar, 
        logout
    }
}