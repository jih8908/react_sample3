import { Link } from "react-router-dom";

function Navbar(){
    return <nav>
{/* nav = 보통 메뉴 칭함 */}
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/profile">프로필</Link></li>
                </ul>
           </nav>
}

export default Navbar;