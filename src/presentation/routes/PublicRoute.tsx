import { JSX } from "react";
import { Navigate } from "react-router";

export const PublicRoute = ({ children}: { children: JSX.Element})=>{
    const user = localStorage.getItem("user");
    if(user){
        return <Navigate to="/"  replace/>
    }
    return children;
}
export default PublicRoute;