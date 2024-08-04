import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

function Cart() {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <div className="text-right p-2 m-2">
            <button className="p-2 m-2 bg-orange-500 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
        </div>
        {cartItem.length === 0 && <h1>Cart is empty. Add item to the cart.</h1>}
        <ItemList itemData={cartItem} />
      </div>
    </div>
  )
}

export default Cart
