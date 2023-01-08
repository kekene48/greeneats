import './LandingPage.css';
import Text from './Text.js';
import Header from './Header.js';
import LoginButton from './LoginButton.js';
import SignUpButton from './SignUpButton.js';

function LandingPage() {
	return (
		<div className="App">
			<Header />
			<Text></Text>
			<SignUpButton />
		</div>
	);
}

export default LandingPage;
