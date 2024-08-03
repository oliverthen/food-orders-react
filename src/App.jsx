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

	// function handleCheckoutSubmit() {

	// }

	function handleAddCart(itemId) {
		setCart(prevCart => {
			return {
				...prevCart,
				
			}
		})
	}

  return (
    <>
			<Modal open={cartModalIsOpen}>
        <Cart onClose={handleCartClose} onCheckout={handleCheckoutOpen}/>
      </Modal>
			<Modal open={checkoutModalIsOpen}>
				<Checkout onClose={handleCheckoutClose}/>
			</Modal>
      <Header onCartOpen={handleCartOpen}/>
			<Products />
    </>
  );
}

export default App;
