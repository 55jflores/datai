import { useEffect, useState } from "react";
import Image from "next/image";

import LoadingComponent from "./loading";

type apod = {
    copyright: string,
    date: string,
    explanation: number,
    hdurl: string,
    media_type: string,
    service_version: number,
    title: string,
    url: string
}


export default function Apod() {

  const [isLoading, setIsLoading] = useState(true);
  const [imgObj, setImgObj] = useState<apod>();

  useEffect(() => {
      async function fetchData() {
      // Send the form data to our API and get a response.
      const response = await fetch('/api/apod', {
      // The method is POST because we are sending data.
      method: 'GET',
      })

      // Get the response data from server as JSON.
      const result = await response.json();
      console.log(result)
      setImgObj(result.data as apod);
      setIsLoading(false)
      }
      fetchData();
  },[])


  return (
    <>

      {isLoading && <LoadingComponent message="Fetching Picture..." /> }   

      <div className="flex flex-col items-center bg-white dark:bg-gray-800 mt-4 text-gray-800 dark:text-white">
          {imgObj !== undefined && (
              <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
                <p className="text-gray-800 dark:text-white">{imgObj["title"]}</p>
                <p className="text-gray-800 dark:text-white">{imgObj["date"]}</p>
                <Image
                    className="rounded-md"
                    src={imgObj["url"]}
                    alt="new"
                    width={512}
                    height={512}
                />
                <p className="text-gray-800 dark:text-white">{imgObj["explanation"]}</p>
              </div>
          )}

      </div>
    </>
  );
}