import { FormEvent } from 'react'
import { useState } from 'react'
import Select from 'react-select';

import LoadingComponent from "./loading";

type exercise = {
    BodyPart: string,
    Description: string,
    Equipment: number,
    ID: string,
    Title: string
}

type exercisesArray = Array<exercise>;

interface DropdownState {
  selectedBodyPart: { value: string; label: string } | null;
  selectedEquipment: { value: string; label: string } | null;

}

type ExerciseOptions = {
  value: string;
  label: string;
}
export default function Exercises() {
  const [exercises, setExercises] = useState<exercisesArray>([]);
  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [noExercises, setNoExercises] = useState(false);

  const [selectedBodyPart, setSelectedBodyPart] = useState<ExerciseOptions | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<ExerciseOptions | null>(null);


  const bodyPartOptions = [
    { value: 'Abdominals', label: 'Abdominals' },
    { value: 'Adductors', label: 'Adductors' },
    { value: 'Abductors', label: 'Abductors' },
    { value: 'Biceps', label: 'Biceps' },
    { value: 'Calves', label: 'Calves' },
    { value: 'Chest', label: 'Chest' },
    { value: 'Forearms', label: 'Forearms' },
    { value: 'Glutes', label: 'Glutes' },
    { value: 'Hamstrings', label: 'Hamstrings' },
    { value: 'Lats', label: 'Lats' },
    { value: 'Lower Back', label: 'Lower Back' },
    { value: 'Middle Back', label: 'Middle Back' },
    { value: 'Traps', label: 'Traps' },
    { value: 'Neck', label: 'Neck' },
    { value: 'Quadriceps', label: 'Quadriceps' },
    { value: 'Shoulders', label: 'Shoulders' },
    { value: 'Triceps', label: 'Triceps' },
  ];

  const equipmentOptions = [
    { value: 'Bands', label: 'Bands' },
    { value: 'Barbell', label: 'Barbell' },
    { value: 'Kettlebells', label: 'Kettlebells' },
    { value: 'Dumbbell', label: 'Dumbbell' },
    { value: 'Other', label: 'Other' },
    { value: 'Cable', label: 'Cable' },
    { value: 'Machine', label: 'Machine' },
    { value: 'Body Only', label: 'Body Only' },
    { value: 'Medicine Ball', label: 'Medicine Ball' },
    { value: 'Exercise Ball', label: 'Exercise Ball' },
    { value: 'Foam Roll', label: 'Foam Roll' },
    { value: 'E-Z Curl Bar', label: 'E-Z Curl Bar' },
  ];

  const handleBodyPartChange = (selectedBodyPart: ExerciseOptions | null) => {
    setSelectedBodyPart(selectedBodyPart);
  };

  const handleEquipmentChange = (selectedEquipment: ExerciseOptions | null) => {
    setSelectedEquipment(selectedEquipment);
  };

  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    setIsLoading(true);
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
    setIsLoading(false);

  }
  return (

    <div>
      <div className='flex flex-col items-center text-gray-800 dark:text-white'>
        <h1>Welcome!</h1>
        <h1>Enter a Body part you&apos;d like to target as well as equipment you&apos;d like to use</h1>
        <h1>You will be given a result of all the exercises that target that body part using that piece of equipment!</h1>
      </div>


      <form onSubmit={handleSubmit} className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg mt- flex flex-col items-center">
        <label className='text-gray-800 dark:text-white' htmlFor="bodypart">Choose a Body Part:</label>


        <Select
          value={selectedBodyPart}
          onChange={handleBodyPartChange}
          options={bodyPartOptions}
          isSearchable={true}
          placeholder="Select an option"
          name='bodypart'
          id='bodypart'
          required
        />

        <label className='text-gray-800 dark:text-white' htmlFor="equipment">Choose a piece of equipment:</label>
         <Select
          value={selectedEquipment}
          onChange={handleEquipmentChange}
          options={equipmentOptions}
          isSearchable={true}
          placeholder="Select an option"
          name='equipment'
          id='equipment'
          required
          className="text-gray-800 dark:text-gray-800"
        />
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2">
          Submit
        </button>
      </form>

      <div className=" bg-white dark:bg-gray-800 mt-4">
        {isLoading && <LoadingComponent message="Fetching Picture..." /> }   
        {noExercises && <p className=" bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white p-4 rounded-lg shadow-lg mb-4">No Exercises found for {bodyPart} using {equipment}, please try a different combination :&#40; </p>}
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