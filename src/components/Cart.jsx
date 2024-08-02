
export default function Cart() {
	return (
		<div className="cart">
			<h2>Your Cart</h2>
			<ul></ul>
			<div className="cart-item-actions">
				<button>Close</button>
				<button className="button">Go to Checkout</button>
			</div>
		</div>
	);
}