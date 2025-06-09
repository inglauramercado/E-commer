import { JSX } from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({children}: {children: JSX.Element})=> {
    const user = localStorage.getItem("user");
    if (!user) {
        return <Navigate to="/login" replace />
        }
        return children;
            
}
export default PrivateRoute