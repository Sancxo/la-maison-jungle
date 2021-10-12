import React, { useEffect, useState } from "react"
import "../styles/Cart.css"
const Cart = ({cart, setCart}) => {
    const [isCartOpen, setIsCartOpen] = useState(true);

    const items = Object.keys(cart)
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

    const removeFromCart = (plantName) => {
        const filteredCart = cart.filter(plant => plant.name !== plantName );
        setCart([...filteredCart]);
    }

    useEffect(() => {
        document.title = `LMJ - total : ${total}€`;
    }, [total])

    return isCartOpen ? (
        <div className="lmj-cart">
            <div className='btn-container'>
                <button className='lmj-cart-btn lmj-cart-empty-btn' onClick={() => setCart([])}>Vider le panier</button>
                <button className='lmj-cart-btn lmj-cart-toggle-btn' onClick={() => setIsCartOpen(false)}>✖</button>
            </div>
            <h2>Panier</h2>
            <ul className="cart-list">
                {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`} className="cart-item">
                        {name} {price}€ x {amount}
                        <button className="lmj-cart-btn lmj-cart-suppr-btn" onClick={() => removeFromCart(name)}>Retirer</button>
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