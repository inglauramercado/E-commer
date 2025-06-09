import { useNavigate } from "react-router";
import "./styles.css";
const DSNavBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const onClickSingIn = ()=> {
    if (!user){
     // window.location.href = "/login"
     navigate("/login");
    }else {
      /*localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/";*/
     navigate("/profile");

    }
  }
  const onLogout = ()=>{
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="div-navbar-body">
      <div>
        <img src="/src/presentation/assets/img/logo.svg" alt="Logo" />
      </div>
      <div className="div-navbar-menu">
        <div className="div-navbar-shop">
          <p>Shop</p>
          <img src="/src/presentation/assets/icon/arrow.svg" alt="Arrow" />
        </div>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
      </div>
      <div className="div-navbar-input">
        <img src="/src/presentation/assets/icon/search.svg" alt="Search" />
        <input type="text" placeholder="Search for products..." />
      </div>
      <div className="div-navbar-icon">
        <img src="/src/presentation/assets/icon/cart.svg" alt="Cart" />
        {
          user ? (
            <>
            <p onClick={onLogout}>Logout</p>
            <img src={localStorage.getItem("image")?? "/src/presentation/assets/icon/user.svg"} alt="User"
            className="user-icon" />
            </>
          ):(
            <img  onClick={onClickSingIn} src="/src/presentation/assets/icon/user.svg" alt="User" />
          )
        }
        <p onClick={onClickSingIn} className="p-user"><strong>{user ?? "Sing In"} </strong></p>
      </div>
    </div>
  );
};

export default DSNavBar;
