import React, { useEffect, useState } from "react"
import "../styles/Cart.css"
const Cart = ({cart, setCart}) => {
    const [isCartOpen, setIsCartOpen] = useState(true);

    const items = Object.keys(cart)
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

    useEffect(() => {
        document.title = `LMJ - total : ${total}€`;
    }, [total])

    return isCartOpen ? (
        <div className="lmj-cart">
            <div className='btn-container'>
                <button className='lmj-cart-empty-btn' onClick={() => setCart([])}>Vider le panier</button>
                <button className='lmj-cart-toggle-btn' onClick={() => setIsCartOpen(false)}>✖</button>
            </div>
            <h2>Panier</h2>
            <ul>
                {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                    </div>
                ))}
            </ul>
            Total : { total }€
        </div>
    ) : (
        <div className="lmj-cart-closed" style={{background: 'white'}}>
            <button className='lmj-cart-toggle-btn' onClick={() => setIsCartOpen(true)}>🛒</button>
        </div>
    )
}

export default Cart;