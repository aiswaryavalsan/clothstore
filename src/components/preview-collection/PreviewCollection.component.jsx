import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './PreviewCollection.style.scss'
const PreviewCollection = ({title,item}) => {
  return (
   <div className='collection-preview'>
    <h1 className='title'>
    {title}
    </h1>
    <div className='preview'>
      {item.filter((item,idx)=>idx<4)
      .map(items=>
      <CollectionItem id={items.id} name={items.name} imageUrl={items.imageUrl} price={items.price}></CollectionItem>
      )}
    </div>
   </div>
  )
}

export default PreviewCollection