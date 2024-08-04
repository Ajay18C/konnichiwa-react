import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

function ItemList({ itemData }) {

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {itemData.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-orange-400 border-b-2 flex justify-between"
        >
          <div className="px-4 w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs pt-4">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-10 rounded-lg bg-yellow-100 shadow-lg" onClick={() => addToCart(item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-40 p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
