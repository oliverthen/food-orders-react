
export default function Cart({onClose, onCheckout}) {
	return (
		<div className="cart">
			<h2>Your Cart</h2>
			<ul></ul>
			<div className="cart-item-actions">
				<button onClick={onClose}>Close</button>
				<button className="button" onClick={onCheckout}>Go to Checkout</button>
			</div>
		</div>
	);
}