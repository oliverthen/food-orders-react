import Logo from '../assets/logo.jpg'

export default function Header() {
	return (
		<div id="main-header">
			<div id="title">
				<img src={Logo} alt="React Food Logo" />
				<h1>Reactfood</h1>
			</div>
		</div>
	);
	
}