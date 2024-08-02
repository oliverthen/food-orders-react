import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Modal from "./components/Modal";


function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleCartOpen() {
		setModalIsOpen(true);
	}

  return (
    <>
			<Modal open={modalIsOpen}>
        <Cart />
      </Modal>
      <Header onCartOpen={handleCartOpen}/>
			<Products />
    </>
  );
}

export default App;
