import Link from 'next/link';

function NavBar() {
  return (
<nav className="bg-gray-300 dark:bg-gray-700">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex flex-wrap items-center justify-between h-16">
      <div className="flex-shrink-0">
        <Link href="/">
          <p className="text-gray-800 dark:text-white font-bold text-lg">datai</p>
        </Link>
      </div>

      <div className="flex-grow sm:flex sm:justify-center">
        <div className="flex flex-wrap justify-center sm:justify-end">
          <Link href="/exercises">
            <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Gym Exercises
            </p>
          </Link>

          <Link href="/food">
            <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Food classifier
            </p>
          </Link>

          <Link href="/filters">
            <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Image Filters
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





