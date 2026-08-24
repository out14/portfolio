
import { Card } from '@/package/component';
import {useListData} from '@/package/hook/List';
import type { portType } from '@/package/type';
import cn from 'classnames';
import { Link } from "react-router-dom"

export const Portfolio = () => {

   
    const {
        data,
        filter,
        setFilter,
        isLoading,
        error
    } = useListData()
    

    return (
        <div>
            <div className="portfolio_tab">
                <button 
                    onClick={()=>setFilter('all')} 
                    className={cn(filter==='all'?'on':'')} 
                >All</button> 
                <button 
                    onClick={()=>setFilter('design')} 
                    className={cn(filter==='design'?'on':'')} 
                >Design</button> 
                <button 
                    onClick={()=>setFilter('publishing')} 
                    className={cn(filter==='publishing'?'on':'')} 
                >Publishing</button> 
                <button 
                    onClick={()=>setFilter('frontend')} 
                    className={cn(filter==='frontend'?'on':'')} 
                    >Front end</button> 
               
                </div>
            <ul className="portfolioList">

                {data?.map((element:portType)=>(
                    <li key={element.id}>
                        <Card element={element}/>
                    </li>
                ))}
                
                
            </ul>
        </div>
    );
};

