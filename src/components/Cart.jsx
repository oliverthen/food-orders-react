
export default function Cart({onClose, onCheckout, cart}) {
	return (
		<div className="cart">
			<h2>Your Cart</h2>
			<ul>
				{/* {cart.map(meal => {
					<li key={}></li>
				})} */}
			</ul>
			<div className="cart-item-actions">
				<button onClick={onClose}>Close</button>
				<button className="button" onClick={onCheckout}>Go to Checkout</button>
			</div>
		</div>
	);
}