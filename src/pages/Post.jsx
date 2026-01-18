import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa'
import { getPostBySlug, blogPosts } from '../data/blogPosts'

const Post = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="py-12 text-center bg-black">
        <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary-400 hover:text-primary-300">
          Back to Blog
        </Link>
      </div>
    )
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="py-12 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blog
        </Link>

        <article className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800">
          <div className="h-96 bg-gray-200 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <FaCalendar className="mr-2" />
              <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              <span className="mx-2">•</span>
              <FaUser className="mr-2" />
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span className="inline-block bg-primary-900 text-primary-300 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full"
                >
                  <FaTag className="mr-2 text-xs" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}></div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-800"
                >
                  <div className="h-40 bg-gray-800 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-primary-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Post

