import Link from "next/link";

function RecipeDetailsItem({ item }) {
    return (
        <div>
            <Link href={'/recipe-list'} className="px-16">Go Back</Link>
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-10">
                    <div className="w-full sm:w-2/5">
                        <img src={item.image} alt={item.name} className="w-full sm:w-4/5 rounded-sm object-cover" />
                    </div>
                    <div className="w-full sm:w-3/5 flex flex-col sm:flex-row gap-4">
                        <div className="mt-5 w-full sm:w-1/2">
                            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
                            <ul className="space-y-2 list-disc mt-4 pl-4 text-sm text-gray-700">
                                {item.ingredients.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-5 w-full sm:w-1/2">
                            <h3 className="text-lg font-bold text-gray-700">Instructions</h3>
                            <ul className="space-y-2 list-disc mt-4 pl-4 text-sm text-gray-700">
                                {item.instructions.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetailsItem;
