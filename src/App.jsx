import { BrowserRouter, Routes, Route  } from "react-router-dom"

import PostsList from "./pages/Postslist"
import AboutUs from "./pages/AboutUs"
import HomePage from "./pages/HomePage"

import DefaultLayout from "./layouts/DefaultLayout"

import SinglePosts from "./products/SinglePosts"

import { GlobalProvider } from "./context/GlobalContext"

function App() {


  return (
    <>
    <GlobalProvider>
  
     <BrowserRouter>
       <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/posts-list" Component={PostsList} />
            <Route path="/posts-list/:id" Component={SinglePosts} />
       
          
          </Route>

       </Routes>
     
      </BrowserRouter>
     </GlobalProvider>
    </>
  )
}

export default App
