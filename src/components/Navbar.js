import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from 'react';

function Navbar() {
    const [userId, setUserId] = useState(sessionStorage.getItem("userId"));

    const handleLogout = () => {
        // 세션 제거
        sessionStorage.removeItem("userId");
        // 홈으로 이동
        window.location.href = "/";
    };

    let navbarContent;

    if (userId) {
        navbarContent = (
            <>
                <li className="navbar-menu-item"><Link to="#" onClick={handleLogout}>로그아웃</Link></li>
                <li className="navbar-menu-item"><Link to="/profile">마이페이지</Link></li>
            </>
        );
    } else {
        navbarContent = (
            <>
                <li className="navbar-menu-item"><Link to="/login">로그인</Link></li>
                <li className="navbar-menu-item"><Link to="/join">회원가입</Link></li>
            </>
        );
    }

    return <nav className="navbar">
        {/* nav = 보통 메뉴 칭함 */}
        <ul className="navbar-menu poor-story-regular">
            <li className="navbar-menu-item"><Link to="/">홈</Link></li>

            {navbarContent}
           
            <li className="navbar-menu-item"><Link to="/write">글쓰기</Link></li>
        </ul>
    </nav>
}

export default Navbar;