import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return <>
    <div className="d-flex  mb-3  fs-4 " id="navbar">
        <NavLink to="/" className= "m-3 p-2 text-light text-decoration-none mx-5"> 🏡 Home</NavLink>
        <NavLink to="/Contact" className= "m-3 p-2 text-light text-decoration-none mx-5"> ✉️ Contact</NavLink>
        <div className="ms-auto p-4 text-light mx-5">Happy Cake 🍰 </div>
    </div>
    </>
}