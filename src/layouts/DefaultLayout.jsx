import { Outlet } from "react-router-dom"

import Header from "../componets/Heder"

const DefaultLayout = () =>{
    return (

        <>
        <Header/>
        <Outlet />
        <footer>Footer</footer>
        </>
        
    )
}
export default DefaultLayout