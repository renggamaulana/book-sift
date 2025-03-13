interface BooksProps {
    book: { id: number; title: string, author: string, image:string };
}

export default function BookCard({book}: BooksProps) {
    
    return (
        <>
            <button key={book.id} className="cursor-pointer p-2 flex flex-col">
                <div className="">
                    <img src={book.image} alt="" className="w-40 h-40 object-contain" />
                </div>
                <div className="flex flex-col text-left">
                    <h2 className="text-md font-bold leading-5">{book.title}</h2>
                    <span className="text-sm">{book.author}</span>
                </div>
            </button>
        </>
    )
}