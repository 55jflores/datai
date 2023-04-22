import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";

interface apod  {
    copyright: string,
    date: string,
    explanation: number,
    hdurl: string,
    media_type: string,
    service_version: number,
    title: string,
    url: string
}

interface Props {
  apodData: apod
}


const APODPage: NextPage<Props> = ({apodData}) => {

  return (
    <>
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 mt-4 text-gray-800 dark:text-white">
          
              <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
                <p className="text-gray-800 dark:text-white">{apodData["title"]}</p>
                <p className="text-gray-800 dark:text-white">{apodData["date"]}</p>
                <Image
                    className="rounded-md"
                    src={apodData["url"]}
                    alt="new"
                    width={512}
                    height={512}
                />
                <p className="text-gray-800 dark:text-white">{apodData["explanation"]}</p>
              </div>
      
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {

  // Send the form data to our API and get a response.
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA}`,{method: 'GET'});

  // Get the response data from server as JSON.
  const apodData = await response.json();

  return {
    props: {
      apodData,
    },
  };

};

export default APODPage;