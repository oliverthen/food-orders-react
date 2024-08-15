

export default function Cart({onClose, onCheckout, cart, products, onMinusOneProduct, onPlusOneProduct}) {
	// Creating array of keys in cart object to cross reference them with products array
	let cartKeys = Object.keys(cart);

	let totalCost = 0;



	return (
		<div className="cart">
			<h2>Your Cart</h2>
			<ul>
				{cartKeys.map(mealId => {
					// Getting meal object from products array
					const meal = products.find(meal => meal.id === mealId);

					totalCost += meal.price * cart[mealId];

					return (
						<li key={mealId} className="cart-item">
							<p>{meal.name} - {cart[mealId]} x ${meal.price}</p>
							<div className="cart-item-actions">
								<button className="text-button" onClick={() => onMinusOneProduct(mealId)}>-</button>
								{cart[mealId]}
								<button className="text-button" onClick={() => onPlusOneProduct(mealId)}>+</button>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="cart-total">
				${totalCost}
			</div>
			<div className="modal-actions">
				<button onClick={onClose}>Close</button>
				<button className="button" onClick={onCheckout}>Go to Checkout</button>
			</div>
		</div>
	);
}