import { TransitionNavLink } from "./transNavLink"


export const Header =()=>{

    return (
        <div>
            <div className="header">
                <div className="header_cnt">
                    <TransitionNavLink to="/"  className="header_logo">
                        <img src={`${import.meta.env.BASE_URL}image/logo.png`} alt="로고"/>
                    </TransitionNavLink>
                    <ul className="header_ul">
                        <li id="index">
                            <TransitionNavLink to="/" >Main</TransitionNavLink>
                        </li>
                        <li id="about">
                            <TransitionNavLink to="/about" >about</TransitionNavLink>
                        </li>
                        <li id="portfolio">
                            <TransitionNavLink to="/portfolio">Portfolio</TransitionNavLink>
                        </li>
                        {/* <li id="contact"><a href="">Contact us</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )

}

 