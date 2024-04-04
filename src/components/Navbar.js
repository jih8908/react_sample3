import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return <nav className="navbar">
{/* nav = 보통 메뉴 칭함 */}
                <ul className="navbar-menu">
                    <li className="navbar-menu-item"><Link to="/">홈</Link></li>
                    <li className="navbar-menu-item"><Link to="/profile">마이페이지</Link></li>
                    <li className="navbar-menu-item"><Link to="/login">로그인</Link></li>
                    <li className="navbar-menu-item"><Link to="/join">회원가입</Link></li>
                </ul>
           </nav>
}

export default Navbar;