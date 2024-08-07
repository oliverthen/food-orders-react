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

				console.log(resData);
				handleProducts(resData);
				setIsFetching(false);
				
			} catch(error) {
				setError({message: error.message || 'Could not fetch products, please try again later.'} );
				setIsFetching(false);
			}

			
		}

		fetchProducts();
		
	}, []);

	// if (error) {
	// 	return (
	// 		<Error
	// 			title="An error occured!"
	// 			message={error.message}
	// 		/>
	// 	);
	// }

	

  return (
    // <Places
    //   title="Available Places"
    //   places={availablePlaces}
		// 	isLoading={isFetching}
		// 	loadingText="Fetching place data..."
    //   fallbackText="No places available."
    //   onSelectPlace={onSelectPlace}
    // />
		<>
			{products && 
				<div id="meals">
					{products.map(product => {
						return (
						<div className="meal-item" key={product.id}>
							<article>
								<img src={`http://localhost:3000/${product.image}`} alt={product.name}/>
								<h3>{product.name}</h3>
								<button className="meal-item-price">
									{product.price}
								</button>
								<p className="meal-item-description">
									{product.description}
								</p>
								<button className="meal-item-actions button" onClick={() => onAdd(product.id)}>
									Add to Cart
								</button>
							</article>
						</div>
						);
					})}
					
				</div>
			}
		</>
  );
}