import { Link } from "react-router-dom";
import "../styles/usersidebar.css";
import { useNavigate } from "react-router-dom";

const UserSideBar = (props) => {
  let navigateLogout = useNavigate();

  let handleLogout = ()=>{
    navigateLogout('/')
  }
  return (
    <div className="user-sidebar">
      <div className="user">
        <div className="image">
          <img
            src="https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png"
            alt=""
          />
        </div>
        <div className="userName">
          <p>User</p>
          <p>{props.data}</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/user-portal/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user-portal/book-list" className="link">
              Book List
            </Link>
          </li>
        </ul>
      </div>
      <div className="logout">
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  );
};
export default UserSideBar;