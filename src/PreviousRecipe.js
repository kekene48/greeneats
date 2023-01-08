import classes from "./PreviousRecipe.module.css";

function PreviousRecipe(props) {
  return (
    <div>
    	<section className={classes.previousrecipe}>
    		<h1>Visit past recipes</h1>
    		<table className={classes.centeredtable} id="RecipeTable">
  				<tr>
    				<th className={classes.dish}>Dish</th>
    				<th className={classes.recipelink}>Recommended Recipe</th>
  				</tr>
  				<tr>
  					<td className={classes.data}>{props.dish}</td>
    				<td className={classes.data}>{props.recipelink}</td>
  				</tr>
  				<tr>
    				<td className={classes.data}>{props.dish}</td>
    				<td className={classes.data}>{props.recipelink}</td>
  				</tr>
			</table>
    	</section>
    </div>
  );
}

function AddRow(props) {
	var table = document.getElementById("RecipeTable");
	var row = table.insertRow(0);
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	cell1.innerHTML = "props.newdish";
  	cell2.innerHTML = "props.newrecipe";
}

export default PreviousRecipe;