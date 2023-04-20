import Link from 'next/link';

function NavBar() {
return (
  <div className=' bg-white dark:bg-gray-800 mt-4 text-gray-800 dark:text-white'> 
    <div className="p-4 rounded-lg shadow-lg">
          
          <Link href="/">
            <p className="text-gray-800 dark:text-white font-bold text-lg">
              datai
            </p>
          </Link>

          <Link href="/exercises">
            <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Gym Exercises
            </p>
          </Link>

          <Link href="/name">
            <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Name classifier
            </p>
          </Link>

          <Link href="/apod">
            <p className="text-gray-800 dark:text-white hover:bg-gray-500 hover: hover:text-gray-300 dark:hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Astronomy Pic of the Day
            </p>
          </Link>

      </div>
  </div>

  );
}

export default NavBar;





