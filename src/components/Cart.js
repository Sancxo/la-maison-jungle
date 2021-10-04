import { useState } from "react"
import "../styles/Cart.css"
const Cart = ({cart, setCart}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15
    return isCartOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setCart(0)}>Vider le panier</button>
            <button className='lmj-cart-toggle-button' onClick={() => setIsCartOpen(false)}>✖</button>
            <h2>Panier</h2>
            <div>
                {/* Monstera : {monsteraPrice}€  */}
                {/* <button onClick={() => setCart(cart + 1)}>Ajouter</button> */}
                {/* <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li> */}
            </div>
            Total : {monsteraPrice * cart }€
        </div>
    ) : (
        <div className="lmj-cart-closed" style={{background: 'white'}}>
            <button className='lmj-cart-toggle-button' onClick={() => setIsCartOpen(true)}>🛒</button>
        </div>
    )
}

export default Cart;