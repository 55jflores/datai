import type { NextApiRequest, NextApiResponse } from 'next'

type exercise = {
  BodyPart: string,
  Description: string,
  Equipment: number,
  ID: string,
  Title: string
}

type exercisesArray = Array<exercise>

type ResponseData = {
  data:  exercisesArray
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const body = req.body

  // Using fetch to retrieve data from the API
  let exercises_response = await fetch(`https://jflo55.pythonanywhere.com/api/exercises/${body.bodypart}/${body.equipment}`,{method: 'GET'});
  // Grabbing JSON
  const exercises_json = await exercises_response.json();

  // Return JSON
  res.json({data: exercises_json})
}