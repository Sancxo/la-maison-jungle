import React, { useState } from 'react';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {
  const [cart, setCart] = useState(0);

  return (
    <React.Fragment>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
