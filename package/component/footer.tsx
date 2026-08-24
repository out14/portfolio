

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_inner">
                <div className="footer_inner_info">
                    <div className="footer_logo">
                        <img src={`${import.meta.env.BASE_URL}image/logo_white.png`} alt="로고"/>
                    </div>
                    <ul className="footer_sns">
                        <li>
                            <a href="https://github.com/out14" target="_blank">
                                <img src={`${import.meta.env.BASE_URL}image/git_logo.png`} alt="깃"/>
                                <span>out14</span>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <img src={`${import.meta.env.BASE_URL}image/insta_logo.png`} alt="인스타"/>
                                <span>gi_mamaw</span> 
                            </a>
                        </li>
                        <li>
                            <a href="https://open.kakao.com/me/demalper" target="_blank">
                                <img src={`${import.meta.env.BASE_URL}image/kakao_logo.png`} alt="카카오"/>
                                <span>demalper</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:gi_ma@naver.com">
                                <img src={`${import.meta.env.BASE_URL}image/mail_logo.png`} alt="메일"/>
                                <span>gi_ma@naver.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer_caption">
                    © 2026 Demalper. ALL RIGHTS RESERVED.
                </div>
            </div>
            
        </div>
    );
};

 