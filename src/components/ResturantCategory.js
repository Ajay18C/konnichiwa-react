import ItemList from "./ItemList";
import {useState} from 'react';

function ResturantCategory({categoryData, showItems, setIndex, unsetIndex}) {
    const handleClick = () => {
      showItems ? unsetIndex() : setIndex();
    }
  return (
    <div>
      <div className="w-9/12 mx-auto my-4 bg-orange-50 shadow-lg p-4">
      <div className="flex justify-between m-2 cursor-pointer" onClick = {handleClick}>
        <span className="font-bold text-lg">{categoryData.title} ({categoryData.itemCards.length})</span>
        <span>🔽</span>
      </div>
        {showItems && <ItemList itemData={categoryData.itemCards}/>}
      </div>
    </div>
  )
}

export default ResturantCategory
