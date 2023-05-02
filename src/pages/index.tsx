import Head from "next/head";

export default function Home() {

  return (

    <div>
       <Head>
          <title>Home</title>
        </Head>
      <div className='flex flex-col items-center text-gray-800 dark:text-white text-lg'>
        <h1>Welcome!</h1>
        <p>Named datai because I give you data and sometimes I use AI to do so</p>
        <p>Click on a tab above to interact with projects I have created!</p>
        <p>Website still a work in progress... obviously lol</p>

      </div>
      
    </div>


  )
}