import { useListData } from "@/package/hook";
import type { portType } from "@/package/type";
import React from "react";
import { useParams } from "react-router-dom";

export const PortfolioView = () => {
    // await fetch('/package/data/data.json')
    // .then(res=>res.json())
    // .then(data=>{

    //     const findData = data.find(e=>e.nickname===nickname)
    //     // const findData = data.map(e=>e.nickname)

    //     console.log('???',findData,data)    
        
    // })

    const { data } = useListData() 

    const { nickname } = useParams()
    const element = data?.find((e:portType)  =>e.nickname===nickname)

    console.log(element,'??',nickname)

    return (
        <React.Fragment>
            {data&&(
                <React.Fragment>
                    
                    <section className="sub_con port_view">
                        <div className="port_view_banner" 
                            style={{
                                background:`url('${import.meta.env.BASE_URL}image/portfolio/banner_${element.nickname}.jpg')center no-repeat`,
                                backgroundSize:`cover`
                        }}>
                            <div className="port_view_banner_cnt">
                                <h5>{element.tag}</h5>
                                <h3>{element.title}</h3>
                                <p dangerouslySetInnerHTML={{__html: element.description}}></p>
                                {element.link&&(
                                <a href={element.link} className="port_link" target="_blank">
                                    <span>
                                        <img src={`${import.meta.env.BASE_URL}image/port_link.png`} />  
                                        <i>
                                            <img src={`${import.meta.env.BASE_URL}image/port_link_arrow.png`} />  
                                        </i>
                                    </span>사이트 새창보기
                                </a>
                                )}
                            </div>
                        </div>
                        <img src={`${import.meta.env.BASE_URL}${element.thumbnail}`} alt="포폴 화면" className="port_main_view"/>
                    </section>     
                    


                    <div className="port_gap">
                        <div className="port_view_bg" 
                            style={{
                                backgroundImage:`url('${import.meta.env.BASE_URL}image/portfolio/bg_${element.nickname}.jpg')`
                            }}
                        ></div>
                    </div>
                    {element.responsible&&(
                        <div className="port_app_cnt">
                            <img src={`${import.meta.env.BASE_URL}image/portfolio/app_${element.nickname}.png`} alt="포폴 모바일 화면"/>
                        </div>
                    )}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

