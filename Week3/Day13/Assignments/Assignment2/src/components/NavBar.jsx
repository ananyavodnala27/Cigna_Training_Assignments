import { Link } from "react-router-dom";

function NavBar(){

    return (
        <>
            <h2 style={{textAlign : "center"}}>Navigating in Single Page Applications</h2>
            <hr/>
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Depts">Depts</Link>
                <Link to="/Employees">Employees</Link>
                <Link to="/Products">Products</Link>
                <Link to="/NotFound">Not Found</Link>
            </div>
            <hr/>
        </>
    )

}

export default NavBar;