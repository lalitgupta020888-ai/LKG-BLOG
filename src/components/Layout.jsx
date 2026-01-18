import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaBlog, FaUser, FaEnvelope, FaSearch, FaBook, FaVideo } from 'react-icons/fa'
import { useState } from 'react'
import Subscribe from './Subscribe'

const Layout = ({ children }) => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-800">
        <div className="w-full">
          <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/img/lalit_pic.jpg" 
                alt="Lalit Kumar Gupta" 
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-500"
              />
              <div className="text-2xl font-bold text-primary-400">
                Lalit Kumar Gupta
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex space-x-4 items-center">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                }`}
              >
                <FaHome className="text-sm" />
                <span>Home</span>
              </Link>
              <Link
                to="/blog"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-primary-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                }`}
              >
                <FaBlog className="text-sm" />
                <span>Blog</span>
              </Link>
              <Link
                to="/book"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/book') 
                    ? 'text-primary-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                }`}
              >
                <FaBook className="text-sm" />
                <span>Book</span>
              </Link>
              <Link
                to="/online-lectures"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/online-lectures') 
                    ? 'text-primary-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                }`}
              >
                <FaVideo className="text-sm" />
                <span>Online Lectures</span>
              </Link>
              <Link
                to="/about"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-primary-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                }`}
              >
                <FaUser className="text-sm" />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary-400 bg-gray-800' 
                    : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                }`}
              >
                <FaEnvelope className="text-sm" />
                <span>Contact</span>
              </Link>
              <button
                onClick={() => setIsSubscribeOpen(true)}
                className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800"
              >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'bg-gray-800 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Home
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') ? 'bg-gray-800 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/book') ? 'bg-gray-800 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Book
              </Link>
              <Link
                to="/online-lectures"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/online-lectures') ? 'bg-gray-800 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Online Lectures
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') ? 'bg-gray-800 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') ? 'bg-gray-800 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsSubscribeOpen(true)
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors mt-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Lalit Kumar Gupta</h3>
              <p className="text-gray-400">
                Sharing knowledge about technology, development, and life.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lalit Kumar Gupta. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Subscribe isOpen={isSubscribeOpen} onClose={() => setIsSubscribeOpen(false)} />
    </div>
  )
}

export default Layout

