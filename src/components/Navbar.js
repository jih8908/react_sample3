import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return <nav className="navbar">
{/* nav = 보통 메뉴 칭함 */}
                <ul className="navbar-menu poor-story-regular">
                    <li className="navbar-menu-item"><Link to="/">홈</Link></li>
                    <li className="navbar-menu-item"><Link to="/profile">마이페이지</Link></li>
                    <li className="navbar-menu-item"><Link to="/login">로그인</Link></li>
                    {/* 세션 담기면 로그아웃으로 변경 */}
                    <li className="navbar-menu-item"><Link to="/join">회원가입</Link></li>
                    <li className="navbar-menu-item"><Link to="/write">글쓰기</Link></li>
                </ul>
           </nav>
}

export default Navbar;