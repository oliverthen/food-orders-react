import { useState, useEffect } from "react";

export default function Products() {
	const [isFetching, setIsFetching] = useState(false);
	const [availableProducts, setAvailableProducts] = useState([]);
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
				setAvailableProducts(resData);

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
		</>
  );
}