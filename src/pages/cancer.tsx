import Script from "next/script"
import Head from "next/head";

export default function Cancer() {
    return (
      <div className='text-gray-800 dark:text-white'>
         <Head>
          <title>Cancer Cell Classifier</title>
        </Head>
        <Script	src="https://gradio.s3-us-west-2.amazonaws.com/3.27.0/gradio.js" />
        <gradio-app src="https://jflo-cancerclassification.hf.space"></gradio-app>
      </div>
  
    )
  }