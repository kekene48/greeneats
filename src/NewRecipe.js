import classes from "./NewRecipe.module.css";
import AddRow from "./PreviousRecipe.js";

function NewRecipe() {
  return (
    <div>
    	<section className={classes.newrecipe}>
    		<h1>Find a new recipe</h1>
    		<form>
    			<label for="myfile">Select a photo of your food: </label>
    			<br></br>
    			<input type="file" id="myfile" name="myfile" multiple></input>
    			<br></br>
    			<button type="submit" className={classes.submitbutton}
    			onclick="AddRow()">Go!</button>
    		</form>
    	</section>
    </div>
  );
}

export default NewRecipe;