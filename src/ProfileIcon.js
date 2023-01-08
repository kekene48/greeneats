import classes from "./ProfileIcon.module.css";

function ProfileIcon(props) {
	return (
		<div>
			<img src="https://icons-for-free.com/iconfiles/png/512/nature+plant+icon-1320087275141544645.png" 
			width="50" height="50" className={classes.icon}></img>
			<h2 className={classes.welcome}>Welcome, {props.name}!</h2>
		</div>
	);
}

export default ProfileIcon