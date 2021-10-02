import React from 'react';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </React.Fragment>
  );
}

export default App;
