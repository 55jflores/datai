import Link from 'next/link';

function NavBar() {
  return (
    <nav className="bg-gray-300 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-gray-800 dark:text-white font-bold text-lg">datai</p>
            </Link>
          </div>

          <div className="sm:hidden">
            <button type="button" className="block text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-700 focus:ring-white rounded-md">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:block sm:flex-grow">
            <div className="flex justify-center sm:justify-end">
              <Link href="/exercises">
                <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Gym Exercises
                </p>
              </Link>
              <Link href="/name">
                <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Classify Name
                </p>
              </Link>
              <Link href="/apod">
                <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                  Astronomy Pic
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
