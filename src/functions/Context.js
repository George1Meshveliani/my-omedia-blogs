import {createContext} from "react";
import useFetch from "./useFetch";
import api from "./api";

export const Context = createContext([
    [],
    () => {}
])

const ContextProvider = ({children}) => {
    
    const userApi = api('/users');
    const blogsApi = api('/posts');
    const commentsApi = api('/comments');
    
    const [userInfo, userLoading, userError] = useFetch(userApi);
    const [blogsInfo, blogsLoading, blogsError] = useFetch(blogsApi);
    const [commentsInfo, commentsLoading, commentsError] = useFetch(commentsApi);

    const processes = { 
        userInfo, userLoading, userError,
        blogsInfo, blogsLoading, blogsError,
        commentsInfo, commentsLoading, commentsError
     }

    return (
        <Context.Provider value={processes}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;