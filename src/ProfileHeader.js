import {Outlet, Link} from 'react-router-dom';
import classes from  './Header.module.css';
import ProfileIcon from './ProfileIcon.js';

function ProfileHeader() {
	return (
		<div>
			<header className={classes.header}>
				<img src="https://i.postimg.cc/gjN7C6Zc/Screenshot-2023-01-07-at-8-29-01-PM.png" 
				width="50" height="50" className={classes.imageborder}></img>
				<Link to="/">
					<h1 className={classes.heading}>GreenEats</h1>
				</Link>
				<Outlet />
				<ProfileIcon name="shravya"></ProfileIcon>
			</header>
		</div>
	);
}

export default ProfileHeader