import { Link } from  "react-router-dom"    
export const Navbar =()=>{
    return (

        <div>
            <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
         
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>

        
      </div>
        
    )
}