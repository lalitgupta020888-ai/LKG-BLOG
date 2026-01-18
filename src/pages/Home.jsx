import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FaArrowRight, FaCalendar, FaUser, FaTag } from 'react-icons/fa'
import { getFeaturedPosts } from '../data/blogPosts'
import { useState } from 'react'
import Subscribe from '../components/Subscribe'

const Home = () => {
  const featuredPosts = getFeaturedPosts()
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)

  return (
    <div>
      <section 
        className="relative text-white py-20 min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(/img/videoframe_22621.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative w-full">
          <div className="text-left max-w-2xl pl-4 sm:pl-6 lg:pl-8">
            <div className="flex flex-col items-start mb-6">
              <img 
                src="/img/lalit_pic.jpg" 
                alt="Lalit Kumar Gupta" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
              />
              <h1 className="text-3xl md:text-3xl font-bold">
                Lalit Kumar Gupta
              </h1>
            </div>
            <h2 className="text-2xl md:text-1.5xl font-bold mb-4">
              Welcome to My Blog
            </h2>
            <p className="text-base md:text-md text-primary-100 mb-8">
              Sharing knowledge about technology, development, and life
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-sm"
            >
              Explore Blog
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaCalendar className="mr-2" />
                      <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                      <span className="mx-2">•</span>
                      <FaUser className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-primary-600 font-semibold text-sm flex items-center">
                        Read More
                        <FaArrowRight className="ml-2 text-xs" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-300">Blog Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">1000+</div>
              <div className="text-gray-300">Readers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400 mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Latest Posts
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter and never miss a new blog post.
          </p>
          <button
            onClick={() => setIsSubscribeOpen(true)}
            className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-lg"
          >
            Subscribe Now
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      <Subscribe isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    </div>
  )
}

export default Home

