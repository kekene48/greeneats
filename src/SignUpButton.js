import classes from "./SignUpButton.module.css";

function SignUpButton() {
	return (
		<div>
			<button type="button" className={classes.signup}>Sign up now</button>
		</div>
	);
}

export default SignUpButton;