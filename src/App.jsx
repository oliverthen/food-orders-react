import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Checkout from "./components/Checkout";


function App() {
	const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
	const [checkoutModalIsOpen, setCheckoutModalIsOpen] = useState(false);

	const [cart, setCart] = useState({});
	const [availableProducts, setAvailableProducts] = useState([]);

	function handleCartOpen() {
		setCartModalIsOpen(true);
	}

	function handleCartClose() {
		setCartModalIsOpen(false);
	}

	function handleCheckoutOpen() {
		setCartModalIsOpen(false);
		setCheckoutModalIsOpen(true);
	}

	function handleCheckoutClose() {
		setCheckoutModalIsOpen(false);
	}

	function handleAddCart(itemId) {
		setCart(prevCart => {
			let quantity;
			if (prevCart[itemId]) {
				quantity = prevCart[itemId];
				return {
					...prevCart,
					[itemId]: quantity + 1
				}
			}

			return {
				...prevCart,
				[itemId]: 1
			}
		});
	}

	function handleMinusCart(itemId) {
		setCart(prevCart => {
			if (prevCart[itemId] === 1) {
				const cartCopy = {
					...prevCart
				};

				delete cartCopy[itemId];

				return cartCopy;
			} else {
				let quantity = prevCart[itemId];
				return {
					...prevCart,
					[itemId]: quantity - 1
				}
			}
		});
	}

  return (
    <>
			<Modal open={cartModalIsOpen}>
        <Cart onClose={handleCartClose} onCheckout={handleCheckoutOpen} cart={cart} products={availableProducts} onMinusOneProduct={handleMinusCart} onPlusOneProduct={handleAddCart}/>
      </Modal>
			<Modal open={checkoutModalIsOpen}>
				<Checkout onClose={handleCheckoutClose}/>
			</Modal>
      <Header onCartOpen={handleCartOpen}/>
			<Products onAdd={handleAddCart} products={availableProducts} handleProducts={setAvailableProducts}/>
    </>
  );
}

export default App;
