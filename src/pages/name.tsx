import Script from "next/script";
import Head from "next/head";

export default function Name() {
  return (
    <div className='text-gray-800 dark:text-white'>
       <Head>
          <title>Last Name Classifier</title>
        </Head>
      <Script src="https://gradio.s3-us-west-2.amazonaws.com/3.27.0/gradio.js" />
      <gradio-app src="https://jflo-classifylastname.hf.space"></gradio-app>
    </div>
  )
}