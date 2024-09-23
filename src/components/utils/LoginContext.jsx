import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLoginContext = () =>  useContext(LoginContext);

function LoginContextProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false);
    return (<LoginContext.Provider value={{loggedIn,setLoggedIn}}>
        {children}
    </LoginContext.Provider>
    );
}
export default LoginContextProvider;