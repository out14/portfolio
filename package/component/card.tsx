import React from 'react';
import { Link } from 'react-router-dom';
import type { portType } from '@/package/type';

export const Card = ({element}:{element:portType}) => {
    return (
        <Link 
            to={
                element.link===""
                ?`/page/portfolioView.html?nickname=${element.nickname}`
                :element.link
            }
            target="_blank"
        >
            <div className="portfolio_image">
                <img src={element.thumbnail} alt={element.title}/>
            </div>

            <div className="portfolio_info">
                <div className="portfolio_info_type ">
                    {element?.category.map((e: string) => (
                        <span key={e} className={e}>
                            {e}
                        </span>
                    ))}
                </div>
                <div className="portfolio_info_text">
                    <h3>{element.title}</h3>
                    <p>
                        {element?.tag.map((e:string)=>(
                            <span key={e} >
                            {e}
                        </span>
                        ))}
                    </p>
                </div>
            </div>
        </Link>
    );
};

