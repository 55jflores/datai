import Head from "next/head";
import Script from "next/script";
export default function Name() {
  return (
    <div className='flex flex-col items-center text-gray-800 dark:text-white'>
      <Head>
        <Script src="https://gradio.s3-us-west-2.amazonaws.com/3.27.0/gradio.js" />
      </Head>

      <gradio-app src="https://jflo-classifylastname.hf.space"></gradio-app>
    </div>
  )
}