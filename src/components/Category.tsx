interface CategoryProps {
    categories: { id: number; name: string, slug: string }[];
}

export default function Category({categories}:CategoryProps) {
   
    return (
        <>
            <ul className="flex flex-wrap gap-3">
                {categories.map((category) => 
                    <li key={category.id}>
                        <button className="cursor-pointer bg-gray-600/40 backdrop-blur-lg px-3 py-2 rounded-lg hover:bg-gray-700/40 transition duration-300">{category.name}</button>
                    </li>
                )}
            </ul>
        </>
    )
}