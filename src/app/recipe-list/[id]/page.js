import RecipeDetailsItem from '@/components/recipe-details'
import React from 'react'

async function fetchRecipeDetails(itemId) {
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${itemId}`)
        const data = await res.json()

        return data
    } catch (e) {
        throw new Error(e)
    }
}

async function RecipeDetails({ params }) {
    // console.log(params);
    const item = await fetchRecipeDetails(params.id)

    return (
        <div>
            <RecipeDetailsItem item={item} />
        </div>
    )
}

export default RecipeDetails