import { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from 'swr';
import Head from "next/head";
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


const fetcher = async (url: string): Promise<apod> => {
 const res = await fetch(url)
 const data = await res.json();

 return data;
}

export default function Apod() {

  const {data, error, isLoading} = useSWR<apod>("/api/apod",fetcher);

  if(error) return <p>Dam, got an error</p>;
  if(isLoading) return <LoadingComponent message='Loading NASA Picture. Sit tight'/> 

  console.log(data);

  return (
    <>
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 mt-4 text-gray-800 dark:text-white">
        <Head>
          <title>Astronomy Pic of the Day</title>
        </Head>
          {data && (
              <div className="flex flex-col items-center p-4 rounded-lg shadow-lg">
                <p className="text-gray-800 dark:text-white">{data.title}</p>
                <p className="text-gray-800 dark:text-white">{data.date}</p>
                <Image
                    className="rounded-md"
                    src={data.url}
                    alt={`${data.title} image not found`}
                    width={512}
                    height={512}
                />
                <p className="text-gray-800 dark:text-white">{data.explanation}</p>
              </div>
          )}

      </div>
    </>
  );
}