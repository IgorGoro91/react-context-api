import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

const PostsList = () =>{

// const [ posts, setPosts ] = useState( [] )

const {posts, fetchPosts} = useGlobalContext()
if(posts === null){
    fetchPosts();
}

    useEffect ( () =>{
        // axios.get('http://localhost:4000/api/posts')
        // .then(res => setPosts(res.data) )
    }, [] )

    return (

        <>
            <h1>Lista Posts</h1>
            <div className="container">
                <div className="row">

                    {

                        posts.map( (elem) => {
                            const {id, title, content, image, tags } = elem

                            return(
                                <div key={elem.id} className="col-4">
                                    <div className="card-tetle">  
                                        <div className="card-body">
                                            <h4 className="card-title">{elem.title} </h4>
                                            
                                            <p className="card-text">{elem.tags}</p>

                                            <NavLink to={'/posts-list/' + id}>
                                                <button>Leggi di piu</button>
                                            </NavLink>

                                        </div>
                                    </div>      
                                </div>
                            )
                        })
                    }

                </div>


            </div>
        </>
    )
}

export default PostsList