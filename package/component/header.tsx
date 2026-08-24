import { NavLink } from "react-router-dom"

export const Header =()=>{

    return (
        <div>
            <div className="header">
                <div className="header_cnt">
                    <NavLink to="/"  className="header_logo">
                        <img src={`${import.meta.env.BASE_URL}image/logo.png`} alt="로고"/>
                    </NavLink>
                    <ul className="header_ul">
                        <li id="index">
                            <NavLink to="/" className={({ isActive }) => isActive ? "on" : ""}>Main</NavLink>
                        </li>
                        <li id="about">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "on" : ""}>about</NavLink>
                        </li>
                        <li id="portfolio">
                            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "on" : ""}>Portfolio</NavLink>
                        </li>
                        {/* <li id="contact"><a href="">Contact us</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )

}

 