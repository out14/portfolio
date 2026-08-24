import { Link } from 'react-router-dom';
import type { portType } from '@/package/type';
import { TransitionNavLink } from './transNavLink';

export const Card = ({element}:{element:portType}) => {
    return (
        <TransitionNavLink 
            to={
                element.link===""
                ?`/portfolioView/${element.nickname}`
                :element.link
            }
            
        >
            <div className="portfolio_image">
                {/* <img src={element.thumbnail} alt={element.title}/> */}
                <img
                    src={`${import.meta.env.BASE_URL}${element.thumbnail}`}
                    alt={element.title}
                />
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
        </TransitionNavLink>
    );
};

