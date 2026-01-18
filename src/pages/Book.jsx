const Book = () => {
  const books = [
    {
      id: 1,
      title: 'आईटी सिस्टम्स का परिचय (हिन्दी)',
      image: '/img/Introduction to IT System(Hindi).jpeg',
      semester: 'I Year II Semester'
    },
    {
      id: 2,
      title: 'Introduction to IT Systems',
      image: '/img/Introduction to IT System(English).jpeg',
      semester: 'I Year II Semester'
    },
    {
      id: 3,
      title: 'कम्प्यूटर प्रोग्रामिंग यूजिंग-C (हिन्दी)',
      image: '/img/Computer Programming using-C (Hindi).jpeg',
      semester: 'II Year III Semester'
    },
    {
      id: 4,
      title: 'Operating Systems',
      image: '/img/Operating Syatem.jpeg',
      semester: 'II Year III Semester'
    },
    {
      id: 5,
      title: 'Web Technologies',
      image: '/img/Web Technologies.jpeg',
      semester: 'II Year III Semester'
    },
    {
      id: 6,
      title: 'Data Structures Using C',
      image: '/img/Data Structure using C.jpg',
      semester: 'II Year IV Semester'
    },
    {
      id: 7,
      title: 'Scripting Languages (Python)',
      image: '/img/Scripting Languages (Python).jpg',
      semester: 'II Year IV Semester'
    }
  ]

  return (
    <div className="py-12 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Books</h1>
          <p className="text-xl text-gray-300">
            Explore my published books and writings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-800"
            >
              <div className="aspect-[3/4] bg-gray-800 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {book.title}
                </h3>
                {book.titleHindi && (
                  <h4 className="text-lg font-semibold text-primary-400 mb-2">
                    {book.titleHindi}
                  </h4>
                )}
                <p className="text-sm text-gray-400 mb-4">
                  {book.semester}
                </p>
                {book.imageHindi && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <div className="aspect-[3/4] bg-gray-800 overflow-hidden rounded">
                      <img
                        src={book.imageHindi}
                        alt={`${book.title} (Hindi)`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2 text-center">
                      Hindi Edition
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Book

