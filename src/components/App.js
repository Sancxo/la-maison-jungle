import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/App.css'

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") || false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
  }, [darkMode])

  return (
    <React.Fragment>
      <Banner darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
