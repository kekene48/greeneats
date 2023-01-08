import classes from "./LoginButton.module.css";
import {Outlet, Link} from 'react-router-dom';

function LoginButton() {
	
	return (
		<div>
			<Link to="/main">
				<button type="button" className={classes.loginButton}>Login</button>
			</Link>
			<Outlet />
		</div>
	);
}

export default LoginButton;