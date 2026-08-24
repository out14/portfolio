
export const About = () => {
    return (
        <div>
            <div className="about">
            {/* <!-- about main --> */}
            <div className="about_main">
                <div className="about_main_txt">
                <h5>About Me</h5>
                <h2 className="gmarket">
                    디자인을 이해하고, <br/>
                    웹을 만듭니다.
                </h2>
                <p>
                    디자이너로 시작해 웹 퍼블리싱과 프론트엔드를 경험했습니다. <br/>
                    디자인 의도를 이해하고, 사용자 경험을 고민하며 <br/>
                    웹으로 정확하게 구현합니다.
                </p>
                <h4>
                    디자인과 코드, 그 사이에서 균형을 찾습니다.
                </h4>
                </div>
                <img className="about_main_img" src={`${import.meta.env.BASE_URL}image/about_main.png"`} alt="about"/>
            </div>

            {/* <!-- about sec01 --> */}
            <div className="about_sec about_sec01">
                <div className="about_sec_inner">
                <div className="about_main_txt">
                    <h5>MY JOURNEY</h5>
                    <h3 className="gmarket">
                    경험이 쌓여 <br/>
                    지금의 내가 되었습니다.
                    </h3>
                </div>
                <ul className="about_sec_graphic about_sec01_graphic">
                    <li>
                    <dl>
                        <dt>
                        <div className="about_sec01_graphic_img">
                            <img src={`${import.meta.env.BASE_URL}image/main_icon01.png"`} alt="DESIGN"/>
                        </div>
                        <h3>DESIGN</h3>
                        </dt>
                        <dd className="bar"></dd>
                        <dd>
                        <h4>산업디자인 전공</h4>
                        <p>디자인의 기초와 시각적 표현을 배웠습니다.</p>
                        </dd>
                    </dl>  
                    </li>
                    <li>
                    <dl>
                        <dt>
                        <div className="about_sec01_graphic_img">
                            <img src={`${import.meta.env.BASE_URL}image/main_icon03.png"`} alt="PUBLISHING"/>
                        </div>
                        <h3>PUBLISHING</h3>
                        </dt>
                        <dd className="bar"></dd>
                        <dd>
                        <h4>웹 퍼블리싱 시작</h4>
                        <p>HTML, CSS, JavaScript로 웹의 구조와 흐름을 이해하기 시작했습니다.</p>
                        </dd>
                    </dl>
                    </li>  
                    <li>
                    <dl>
                        <dt>
                        <div className="about_sec01_graphic_img">
                            <img src={`${import.meta.env.BASE_URL}image/ic_react.png"`} alt="FRONT-END"/>
                        </div>
                        <h3>FRONT-END</h3>
                        </dt>
                        <dd className="bar"></dd>
                        <dd>
                        <h4>프론트엔드 개발</h4>
                        <p>React, TypeScript를 사용하며 사용자 경험을 고려한 인터랙션을 구현했습니다.</p>
                        </dd>
                    </dl>
                    </li>
                    <li>
                    <dl>
                        <dt>
                        <div className="about_sec01_graphic_img">
                            <img src={`${import.meta.env.BASE_URL}image/ic_goal.png"`} alt="NOW"/>
                        </div>
                        <h3>NOW</h3>
                        </dt>
                        <dd className="bar"></dd>
                        <dd>
                        <h4>디자인 × 퍼블리싱</h4>
                        <p>디자인 감각을 바탕으로 더 나은 웹 경험을 만드는 퍼블리셔로 일하고 있습니다.</p>
                        </dd>
                    </dl>
                    </li>
                </ul>
                </div>
                <img src={`${import.meta.env.BASE_URL}image/about_bg01.png"`} alt="" className="about_sec_bg about_sec_bg01"/>
            </div>

            {/* <!-- about sec02 --> */}
            <div className="about_sec about_sec02">
                <div className="about_sec_inner">
                <div className="about_main_txt">
                    <h5>WHAT I DO</h5>
                    <h3 className="gmarket">
                    생각을 디자인하고, <br/>
                    코드로 구현합니다.
                    </h3>
                </div>
                <ul className="about_sec_graphic about_sec02_graphic">
                    <li>
                    <div className="about_sec01_graphic_img">
                        <img src={`${import.meta.env.BASE_URL}image/main_icon01.png"`} alt="DESIGN"/>
                    </div>
                    <h3>UX/UI 디자인 이해</h3>
                    <p>
                        디자인 의도를 정확히 파악하고
                        사용자 경험을 고려해 웹 페이지를 구현합니다.
                    </p>
                    </li>
                    <li>
                    <div className="about_sec01_graphic_img">
                        <img src={`${import.meta.env.BASE_URL}image/main_icon02.png"`} alt="DESIGN"/>
                    </div>
                    <h3>반응형 구현</h3>
                    <p>
                        모바일부터 데스크탑까지
                        모든 디바이스에 최적화된 웹을 만듭니다.
                    </p>
                    </li>
                    <li>
                    <div className="about_sec01_graphic_img">
                        <img src={`${import.meta.env.BASE_URL}image/main_icon03.png"`} alt="DESIGN"/>
                    </div>
                    <h3>클린한 코드</h3>
                    <p>
                        시맨틱 마크업과 체계적인 CSS 구조로
                        유지보수가 쉬운 코드를 작성합니다.
                    </p>
                    </li>
                    
                </ul>
                </div>
                <img src={`${import.meta.env.BASE_URL}image/about_bg02.png"`} alt="" className="about_sec_bg about_sec_bg02"/>
            </div>

            {/* <!-- about sec03 --> */}
            <div className="about_sec about_sec03">
                <div className="about_sec_inner">
                <div className="about_main_txt">
                    <h5>SKILLS</h5>
                    <h3 className="gmarket">
                    주요 기술 스택
                    </h3>
                </div>
                <ul className="about_sec_graphic about_sec03_graphic">
                    <li>
                    <h3>PUBLISHING</h3>
                    <dl>
                        <dd>HTML5</dd>
                        <dd>CSS3/SCSS</dd>
                        <dd>JavaScript</dd>
                        <dd>jQuery</dd>
                        <dd>Responsive</dd>
                        <dd>Cross Browser</dd>
                        <dd>웹 접근성</dd>
                    </dl>
                    </li>
                    <li>
                        <h3>FRONT-END</h3>
                        <dl>
                        <dd>React</dd>
                        <dd>TypeScript</dd>
                        <dd>React Query</dd>
                        <dd>Git</dd>
                        <dd>Zira</dd>
                        </dl>
                    
                    </li>
                    <li>
                    <h3>DESIGN</h3>
                        <dl>
                        <dd>Figma</dd>
                        <dd>Zepline</dd>
                        <dd>Illustrator</dd>
                        <dd>Photoshop</dd>
                        <dd>Rhino3D</dd>
                        </dl>
                    </li>
                </ul>
                </div>
                <img src={`${import.meta.env.BASE_URL}image/about_bg03.png"`} alt="" className="about_sec_bg about_sec_bg03"/>
            </div>

            </div>
        </div>
    );
};

