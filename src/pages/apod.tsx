import { useEffect, useState } from "react";

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
        setImgObj(result.data as apod);
            
        }
        fetchData();
    },[])


  return (


    <div className="flex flex-col items-center bg-white dark:bg-gray-800 mt-4 text-gray-800 dark:text-white">
        {imgObj !== undefined && (
            <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-white">{imgObj["date"]}</p>
            <img
                src={imgObj["hdurl"]}
                alt="new"
                width={512}
                height={512}
                className="rounded-md"
            />
            <p className="text-gray-800 dark:text-white">{imgObj["explanation"]}</p>
            </div>
        )}
    </div>

  );
}