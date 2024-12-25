import React from 'react'
import SHOP_DATA from './ShopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component';
const Shop = () => {
    const ShopData=SHOP_DATA;
  return (
    <>
    {
        ShopData.map((items)=>
            <PreviewCollection title={items.title} item={items.items}></PreviewCollection>

        )
   
    }
    </>
  )
}

export default Shop