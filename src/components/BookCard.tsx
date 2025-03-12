interface BooksProps {
    books: { id: number; title: string, author: string, image:string }[];
}

export default function BookCard({books}: BooksProps) {
    
    return (
        <>
        {books.map((book) => 
            <button key={book.id} className="cursor-pointer p-2 flex flex-col gap-4">
                <div>
                <img src={book.image} alt="" />
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <h2 className="text-lg font-semibold leading-5">{book.title}</h2>
                    <span>{book.author}</span>
                </div>
            </button>
            )}
            
        </>
    )
}