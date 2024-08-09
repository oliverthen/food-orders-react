

export default function Cart({onClose, onCheckout, cart, products}) {
	let cartKeys = Object.keys(cart);


	return (
		<div className="cart">
			<h2>Your Cart</h2>
			<ul>
				{cartKeys.map(mealId => {
					const meal = products.find(meal => meal.id === mealId);

					return (
						<li key={mealId} className="cart-item">
							<p>{meal.name} - {cart[mealId]} x ${meal.price}</p>
						</li>
					);
				})}
			</ul>
			<div className="cart-item-actions">
				<button onClick={onClose}>Close</button>
				<button className="button" onClick={onCheckout}>Go to Checkout</button>
			</div>
		</div>
	);
}