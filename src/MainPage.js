import './MainPage.module.css';
import NewRecipe from './NewRecipe.js';
import PreviousRecipe from './PreviousRecipe.js';
import ProfileHeader from './ProfileHeader.js';

function MainPage() {
  return (
    <div>
    	<NewRecipe />
    	<ProfileHeader />
    	<PreviousRecipe dish="Example dish" recipelink="whatagreatrecipe.com"></PreviousRecipe>
    </div>
  );
}

export default MainPage;
