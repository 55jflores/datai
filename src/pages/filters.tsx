export default function Filters() {
    return (
  
      <div className='flex flex-col items-center text-gray-800 dark:text-white'>
        <p><b>Iphone Users</b>: Take a screenshot of the image you would like to use, and enter the screenshot instead</p>
        <p>Not doing so will mean it will take longer to apply the filter to the image as well as rotate the image &#40;Darn Apple and their fancy HEIC default image format&#41;</p>
        <iframe
        src="https://jflo-filterz.hf.space"
        width="90%"
        height="600"
        className='bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg mt- flex flex-col items-center mt-2'
        ></iframe>
      </div>
  
    )
  }