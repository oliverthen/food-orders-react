import { useState, useEffect } from "react";

export default function Products({onAdd, products, handleProducts}) {
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		
		async function fetchProducts() {
			setIsFetching(true);

			try {
				const response = await fetch('http://localhost:3000/meals');
				const resData = await response.json();

				if (!response.ok) {
					throw new Error('Failed to fetch products');
				}
				// Update products state in app component
				handleProducts(resData);
				setIsFetching(false);	
				
			} catch(error) {
				setError({message: error.message || 'Could not fetch products, please try again later.'} );
				setIsFetching(false);
			}

			
		}

		fetchProducts();
		
	}, []);

  return (

		<>
			{products && 
				<div id="meals">
					{products.map(product => {
						return (
						<div className="meal-item" key={product.id}>
							<article>
								<img src={`http://localhost:3000/${product.image}`} alt={product.name}/>
								<h3>{product.name}</h3>
								<p className="meal-item-price">
									{product.price}
								</p>
								<p className="meal-item-description">
									{product.description}
								</p>
								<p className="meal-item-actions">
									<button className="button" onClick={() => onAdd(product.id)}>
									Add to Cart
									</button>
								</p>
								
							</article>
						</div>
						);
					})}
					
				</div>
			}
		</>
  );
}