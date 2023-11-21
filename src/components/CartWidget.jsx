import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const {itemsInCart} = useContext(CartContext)
  return (
    <div className='flex gap-2'>
        <p>🛒</p>
        <p>{itemsInCart}</p>
    </div>
  )
}

export default CartWidget