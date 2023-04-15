import Link from 'next/link'
import { FormEvent } from 'react'
import { useState } from 'react'

type exercise = {
    BodyPart: string,
    Description: string,
    Equipment: number,
    ID: string,
    Title: string
}

type exercisesArray = Array<exercise>;

export default function Home() {
  const [exercises, setExercises] = useState<exercisesArray>([]);
  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [loading, setLoading] = useState(false);
  const [noExercises, setNoExercises] = useState(false);
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    setExercises([])
    setBodyPart('')
    setEquipment('')
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      bodypart: form.bodypart.value as string,
      equipment: form.equipment.value as string,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/equipment', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    setBodyPart(form.bodypart.value as string)
    setEquipment(form.equipment.value as string)

    // If exercises were found
    if (result.data.length !== 0){
        setNoExercises(false);
        setExercises(result.data as exercisesArray);
    }
    else {
        setNoExercises(true);
    }
    
    setLoading(false);
    console.log('Front end result is ',result.data)
    //alert(`Is this your full name: ${result.data}`)
    // div className='container'
  }
  return (
    <div className="bg-white dark:bg-black">

      <div className='flex flex-col items-center text-gray-800 dark:text-white'>
        <h1>Welcome!</h1>
        <h1>Enter a Body part you&apos;d like to target as well as equipment you&apos;d like to use</h1>
        <h1>You will be given a result of all the exercises that target that body part using that piece of equipment!</h1>
      </div>


      <form onSubmit={handleSubmit} className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg mt- flex flex-col items-center">
        <label htmlFor="pet-select">Choose a Body Part:</label>

        <select name="bodypart" id="bodypart" required className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white">
            <option value="">--Please choose an option--</option>
            <option value="Abdominals">Abdominals</option>
            <option value="Adductors">Adductors</option>
            <option value="Abductors">Abductors</option>
            <option value="Biceps">Biceps</option>
            <option value="Calves">Calves</option>
            <option value="Chest">Chest</option>
            <option value="Forearms">Forearms</option>
            <option value="Glutes">Glutes</option>
            <option value="Hamstrings">Hamstrings</option>
            <option value="Lats">Lats</option>
            <option value="Lower Back">Lower Back</option>
            <option value="Middle Back">Middle Back</option>
            <option value="Traps">Traps</option>
            <option value="Neck">Neck</option>
            <option value="Quadcriceps">Quadcriceps</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Triceps">Triceps</option>
        </select>

        <label htmlFor="pet-select">Choose a piece of equipment:</label>

        <select name="equipment" id="equipment" required className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white">
          <option value="">--Please choose an option--</option>
          <option value="Bands">Bands</option>
          <option value="Barbell">Barbell</option>
          <option value="Kettlebells">Kettlebells</option>
          <option value="Dumbbell">Dumbbell</option>
          <option value="Other">Other</option>
          <option value="Cable">Cable</option>
          <option value="Machine">Machine</option>
          <option value="Body Only">Body Only</option>
          <option value="Medicine Ball">Medicine Ball</option>
          <option value="None">None</option>
          <option value="Exercise Ball">Exercise Ball</option>
          <option value="Foam Roll">Foam Roll</option>
          <option value="E-Z Curl Bar">E-Z Curl Bar</option>

        </select>

        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </form>

      <div className=" bg-gray-300 dark:bg-gray-800 mt-4">
        {loading && <h1 className="text-gray-800 dark:text-white"><b>Fetching data ...</b></h1>}
        {noExercises && <p className="text-gray-800 dark:text-white">No Exercises found for {bodyPart} using {equipment} :&#40;</p>}
        {exercises.length !== 0 && 
          <div className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-lg mb-4">
          <h1 className="text-gray-800 dark:text-white">Exercises for {bodyPart} using {equipment} : <b>{exercises.length}</b></h1> 
          </div>
        }
        {exercises.length !== 0 && exercises.map((item: exercise) => 
          <div key={item.ID} className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-lg mb-4">
            <p className="text-gray-800 dark:text-white">Name: {item.Title}</p>
            <p className="text-gray-800 dark:text-white mt-4">Description: {item.Description}</p>
          </div>
        )}
      </div>
      
      
      
    </div>
  )
}