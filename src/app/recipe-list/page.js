import RecipeList from "@/components/recipe-list"

async function fetchRecipeList() {
    try {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json()

        return data?.recipes
    } catch(e) {
        throw new Error(e)
    }
}

async function Recipes() {
    const recipeList = await fetchRecipeList()
    return (
        <RecipeList recipeList={recipeList} />
    )
}

export default Recipes