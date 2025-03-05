import { createContext, useState, useContext, Children } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ( {children} ) => {


    const [ posts, setPosts ] = useState( [] )

    const fetchPosts = () => {
        axios.get('http://localhost:4000/api/posts')
        .then(res => setPosts(res.data) )
    }


    const [post, setPost] = useState({
        id: '',
        title: '',
        content: '',
        image: '',
        tags: []

    })

    const fetchSinglePost = () => {
        axios.get('http://localhost:4000/api/posts' + '/' + id)
            .then(res => setPost(res.data))
            .catch(err => console.error(err))
    }

    const value = {
        posts,
        post,
        fetchPosts,
        fetchSinglePost
    }
    return(
        <GlobalContext.Provider value = {value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = useContext(GlobalContext)

export {
    GlobalProvider,
    useGlobalContext

} 