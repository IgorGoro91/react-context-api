import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect  } from "react"

import { useGlobalContext } from "../context/GlobalContext";

const SinglePosts = () =>{

    const {id} = useParams()
    
    // const [post, setPost] = useState({
    //     id: '',
    //     title: '',
    //     content: '',
    //     image: '',
    //     tags: []

    // })

    
    const { post, fetchPosts} = useGlobalContext()

    

    useEffect( () =>{
        // axios.get('http://localhost:4000/api/posts' + '/' + id)
        //     .then(res => setPost(res.data))
        //     .catch(err => console.error(err))
        fetchPosts(index)
    }, [index])

    return (
        <h1>Post Singolo {post.title}</h1>
    )
}
export default SinglePosts

