import { NavLink } from "react-router-dom";
function NotFound(){
    return(
        <div>
        <p className="text-green-700 text-center font-bold">Error</p>
        <h1 className="text-center text-cyan-950 font-semibold text-4xl mt-3"> 404 Not Found</h1>
        <NavLink to="/" className=" mt-10 ml-[640px] inline-flex items-center justify-center px-6 h-10 bg-green-300 rounded-lg text-sm font-medium">Go To Home </NavLink>
        </div>
        
    );

}
export default NotFound;