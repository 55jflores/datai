import Script from "next/script"
export default function Filters() {
    return (
      <div className='flex flex-col items-center text-gray-800 dark:text-white'>
        <Script src="https://gradio.s3-us-west-2.amazonaws.com/3.27.0/gradio.js" />
        <gradio-app src="https://jflo-filterz.hf.space"></gradio-app>
      </div>
  
    )
  }