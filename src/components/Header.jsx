import Logo from '../assets/logo.jpg'


export default function Header({onCartOpen}) {

	return (
		<div id="main-header">
			<div id="title">
				<img src={Logo} alt="React Food Logo" />
				<h1>ReactFood</h1>
			</div>
			<button className='text-button' onClick={onCartOpen}>Cart</button>
		</div>
	);
	
}