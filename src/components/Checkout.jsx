export default function Checkout({onClose, onFormOrderSubmit}) {
	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		const data = Object.fromEntries(fd.entries());
		console.log(data);
		onFormOrderSubmit(data);
	}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount: </p>


			<div className="control">
				<label htmlFor="name">Full Name</label>
				<input type="text" id="name" name="name" required/>
			</div>

			<div className="control">
				<label htmlFor="street">Street</label>
				<input id="street" type="text" name="street" required/>
			</div>


			<div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required/>
      </div>

			<div className="control-row">
				<div className="control">
					<label htmlFor="postal-code">Postal Code</label>
					<input type="number" id="postal-code" name="postal-code" required/>
				</div>
				<div className="control">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" required/>
        </div>
			</div>
      
    
      <div className="modal-actions">
        <button type="reset" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="button" onSubmit={handleSubmit}>
          Submit Order
        </button>
      </div>
    </form>
  );
}