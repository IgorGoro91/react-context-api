import { Link, NavLink } from "react-router-dom"


const Header = () =>{
    return (

        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about-us'}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/posts-list'}>
                            Posts List
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
        
        </>
        
    )
}
export default Header