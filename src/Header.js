import classes from  './Header.module.css';
import LoginButton from './LoginButton.js';

function Header() {
	return (
		<div>
			<header className={classes.header}>
				<img src="https://i.postimg.cc/gjN7C6Zc/Screenshot-2023-01-07-at-8-29-01-PM.png" 
				width="50" height="50" className={classes.imageborder}></img>
				<h1 className={classes.heading}>GreenEats</h1>
				<LoginButton />
			</header>
		</div>
	);
}

export default Header