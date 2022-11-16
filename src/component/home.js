import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
    return (
        <div className="home">
            <div className="icon">
                <img src="https://cdn-icons-png.flaticon.com/512/224/224595.png" alt="" />
            </div>
            <div className="login">
            <h1>LIBRARY</h1>
            <h3><i>A Library is infinity under the roof</i></h3>
                <div className="home-btn">
                    <Link to="/admin-login">
                        <button>Admin</button>
                    </Link>
                    <br />
                    <Link to="/user-login">
                        <button>User</button>
                    </Link>
                </div>
                <a href=""><h5>Not a User?Register Now</h5></a>
            </div>
        </div>
    );
};

export default Home;
