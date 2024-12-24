import React from 'react';
import  './MenuItem.style.scss'
const MenuItem=({title,image,size})=>{
    return(
    <div className={`${size} menu-item`}> 
     <div className='backgroundImage'  style={{backgroundImage:`url(${image})`}} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shopnow</span>
        </div>
    </div>
    )

}
export default MenuItem;