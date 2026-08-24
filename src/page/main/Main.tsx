//import React from 'react';
import {useListData } from '@/package/hook'
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Card } from '@/package/component';
import { Link } from 'react-router-dom';


export const Main = () => {

    const {  
        data,
        // filter,
        // setFilter,
        // isLoading,
        // error 
    } = useListData()

    return (
        <div>
            <div className="main">
                <div className="main_cnt">
                    <div className="main_img">
                    <img className="main_img01" src={`${import.meta.env.BASE_URL}image/main_img02.png`} alt="메인 이미지02"/>
                    <div className="main_txt_title gmarket">
                        <h1>디자이너가</h1>
                        <p className="nanum">말아주는</p>
                        <h1>퍼블리싱</h1>
                    </div>
                    <img className="main_img02" src={`${import.meta.env.BASE_URL}image/main_img01.png`} alt="메인 이미지01"/>
                    <img src={`${import.meta.env.BASE_URL}image/main_postit.png`} className="main_postit" alt="포스트잇"/>
                    </div>
                </div>
            <img className="main_bg" src={`${import.meta.env.BASE_URL}image/bg.jpg`} alt="배경 이미지"/>
            </div>

            <div className="main_body">
                <div className="main_body_cnt">
                    <div className="main_feature">
                        <ul className="main_feature_list">
                            <li>
                            <dl className="main_feature_list_item">
                                <dt>
                                <img src={`${import.meta.env.BASE_URL}image/main_icon01.png`} alt="디자인"/>
                                </dt>
                                <dd>
                                <h3>디자인을 이해하는 퍼블리싱</h3>
                                <p>
                                    디자인 의도를 정확히 파악하고 <br/>
                                    픽셀 단위까지 섬세하게 구현합니다.
                                </p>
                                </dd>
                            </dl>
                            </li>
                            <li>
                            <dl className="main_feature_list_item">
                                <dt>
                                <img src={`${import.meta.env.BASE_URL}image/main_icon02.png`} alt="반응형"/>
                                </dt>
                                <dd>
                                <h3>완벽한 반응형 구현</h3>
                                <p>
                                    모바일부터 데스크탑까지 <br/>모든 디바이스에 최적화된 웹을 만듭니다.
                                </p>
                                </dd>
                            </dl>
                            </li>
                            <li>
                            <dl className="main_feature_list_item">
                                <dt>
                                <img src={`${import.meta.env.BASE_URL}image/main_icon03.png`} alt="유지보수"/>
                                </dt>
                                <dd>
                                <h3>깔끔하고 유지보수 쉬운 코드</h3>
                                <p>
                                    시맨틱 마트업과 체계적인 CSS 구조로<br/> 유지보수가 쉬운 코드를 작성합니다.
                                </p>
                                </dd>
                            </dl>
                            </li>
                            <li>
                            <dl className="main_feature_list_item">
                                <dt>
                                <img src={`${import.meta.env.BASE_URL}image/main_icon04.png`} alt="개발경험"/>
                                </dt>
                                <dd>
                                <h3>개발 경험으로 완성도 UP</h3>
                                <p>
                                    React 개발 경험을 바탕으로 인터렉션과 <br/>기능 구현까지 고려합니다.
                                </p>
                                </dd>
                            </dl>
                            </li>
                        </ul>
                    </div>
                    <div className="main_portfolio">
                        <div className="main_portfolio_title">
                            <h3 className="nanum">Portfolio</h3>
                            <Link to="/portfolio" className="btn btn_type01">
                            전체보기
                            <div className="arrow">
                                <span></span>
                                <span></span>
                            </div>
                            </Link>
                        </div>
                        
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            
                            breakpoints= {{
                                    480: {
                                        slidesPerView: 2,
                                        // spaceBetween: 30
                                    },
                                    
                                    1024: {
                                        slidesPerView: 3,
                                        // spaceBetween: 40
                                    }
                                }}
                            >
                            {
                                data?.map((e:any)=>(
                                    <SwiperSlide>
                                    <Card element={e}/> 
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>
                        
                    <div className="main_portfolio_moblie">
                        <Link to="/portfolio" className="">
                        전체보기
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

            <div className="main_about">
                <div className="main_about_inner">
                    <div className="main_about_txt">
                    <h3 className="">
                        디자인은 예쁘게 <br/>
                        코드는 <span className="nanum">확실하게</span>
                    </h3>
                    <p>당신의 아이디어를 웹에서 완벽하게 말아드립니다.</p>
                    </div>
                    <div className="main_about_img">
                    <img src={`${import.meta.env.BASE_URL}image/main_banner.png`} alt="배너"/>
                    </div>  
                </div>
            </div>
        </div>
    );
};

