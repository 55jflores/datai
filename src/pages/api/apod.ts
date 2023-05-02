import type { NextApiRequest, NextApiResponse } from 'next'

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


type ResponseData = {
  data:  apod
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // Using fetch to retrieve data from the API
  let apod_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA}`,{method: 'GET'});
  
  // Grabbing JSON
  const apod_json = await apod_response.json();

  // Return JSON
  res.json(apod_json)
}