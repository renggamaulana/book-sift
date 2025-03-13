import Category from "../components/Category";
import BookCard from '../components/BookCard';
import Sidebar from '../components/Sidebar';


export default function Homepage() {

    const categories = [
        {
            id: 1,
            name: "Fiction",
            slug: "fiction"
        },
        {
            id: 2,
            name: "Fantasy",
            slug: "fantasy"
        },
        {
            id: 3,
            name: "Horror",
            slug: "horror"
        },
        {
            id: 4,
            name: "Romance",
            slug: "romance"
        },
    ];

    const books = [
        {
            id: 1,
            title: 'The Night Circus',
            author: 'Erin Morgenstern',
            image: '/assets/images/1.png'
        },
        {
            id: 2,
            title: 'The Invisible Life of Addie LaRue',
            author: 'V.E. Schwab',
            image: '/assets/images/2.png'
        },
        {
            id: 3,
            title: 'The Starless Sea',
            author: 'Erin Morgenstern',
            image: '/assets/images/3.png'
        },
        {
            id: 4,
            title: 'The Nightingale',
            author: 'Kristin Hannah',
            image: '/assets/images/4.png'
        },
        {
            id: 5,
            title: 'The Song of Achilles',
            author: 'Madeline Miller',
            image: '/assets/images/5.png'
        },
        {
            id: 6,
            title: 'Circle',
            author: 'Madeline Miller',
            image: '/assets/images/6.png'
        },
        {
            id: 7,
            title: 'A Court of Thorns and Roses',
            author: 'Sarah J. Maas',
            image: '/assets/images/7.png'
        },
        {
            id: 8,
            title: 'The Priory of the Orange Tree',
            author: 'Samantha Shannon',
            image: '/assets/images/8.png'
        },
        {
            id: 9,
            title: 'The House in the Cerulean Sea',
            author: 'T.J. Klune',
            image: '/assets/images/9.png'
        },
        {
            id: 10,
            title: 'The Vanishing Half',
            author: 'Brit Bennett',
            image: '/assets/images/10.png'
        },
    ];

    return(
        <div className="flex gap-5 ">
            <div>
                <Sidebar />
            </div>
            <div className="max-full w-full py-5 px-8 max-h-[80vh] overflow-auto">
                <div>
                    <h1 className="text-white text-3xl font-bold">Discover books you'll love</h1>
                    <p>Browse and search for your next favorite book</p>
                </div>
                <div className="mt-8">
                    <Category categories={categories}/>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-5">
                    {books.map((book) =>
                        <BookCard book={book} />
                    )}
                </div>
            </div>
        </div>
    )
}