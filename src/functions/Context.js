import {createContext} from "react";
import useFetch from "./useFetch";
import api from "./api";

export const Context = createContext([
    [],
    () => {}
])

const ContextProvider = ({children}) => {
    const userApi = api('/users');
    const blogsApi = api('/posts')
    const [userInfo, userLoading, userError] = useFetch(userApi);
    const [blogsInfo, blogsLoading, blogsError] = useFetch(blogsApi);

    const processes = { 
        userInfo, userLoading, userError,
        blogsInfo, blogsLoading, blogsError
     }

    return (
        <Context.Provider value={processes}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;