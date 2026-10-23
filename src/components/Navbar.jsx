import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
                 <div className="flex justify-between item-center">
                <h1 className="text-xl font-bold">SIP Planner</h1>
                
                <div className="flex gap-6">
                <NavLink to="/" className={({isActive})=>isActive? "text-yellow-600 font-semibold": 
                "hover:text-gray-600"}>Home</NavLink>

                <NavLink to="/guide" className={({isActive})=>isActive?"text-yellow-600 font-semibold":
                "hover:text-gray-600"}>SIP Guide</NavLink>

                <NavLink to="/benefit" className={({isActive})=>isActive?"text-yellow-600 font-semibold":
                "hover:text-gray-600"}>Benefits</NavLink>
                
                <NavLink to="/about" className={({isActive})=>isActive?"text-yellow-600 font-semibold":
                "hover:text-gray-600"}>About</NavLink>
                </div>
                </div>
        </nav>
        </>
    );
}
export default Navbar;