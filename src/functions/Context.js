import {createContext} from "react";
import useFetch from "./useFetch";
import api from "./api";

export const Context = createContext([
    [],
    () => {}
])

const ContextProvider = ({children}) => {
    const userApi = api('/users');
    const [userInfo, userLoading, userError] = useFetch(userApi);

    const processes = { userInfo, userLoading, userError }

    return (
        <Context.Provider value={processes}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;