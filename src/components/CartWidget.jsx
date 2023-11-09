import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const {items} = useContext(CartContext)
  return (
    <div className='flex gap-2'>
        <p>🛒</p>
        <p>{items}</p>
    </div>
  )
}

export default CartWidget