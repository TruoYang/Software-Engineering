import React from 'react'

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 ">

    </div>
 
  )
}

export default Background
/*
import { Button } from '@/components/ui/button';
import { SelectBudget, SelectPartners } from '@/constants/options';
import React from 'react'
import { useState } from 'react'


function CreateTrip() {
  // set Form:
  
  // get place
  const [place, setPlace] = useState("");

  // get number of day of trip
  const [day, setDay] = useState(0); // by default
  const [error, setError] = useState("");

  // press +
  const increase = () => {
    setDay((prev) => (prev === "" ? 1 : Number(prev) + 1));
  }

  // press -
  const decrease = () => {
    setDay((prev) => (prev > 0 ? Number(prev) - 1 : 0));
  }

  // get budget
  const [budget, setBudget] = useState(0);

  // get number of people
  const [people, setPeople] = useState(0);
  return (
    <div className='sm:px-10 md:px-20 lg:px-32 xl:px-48 px-5 mt-10 bg-white 
    sm:mx-10 md:mx-15 lg:mx-30 xl:mx-40 py-10 rounded-2xl'>
      
      <h2 className='font-bold text-4xl'>
        Let's see which place would be chosen this time?
      </h2>
      <p className='mt-3 text-[red] text-xl'>
        Please give some information and we will calculate the best suitable result:
      </p>
      <div className='mt-10'>
        <h2 className='text-xl my-3 font-medium'>
          Which place would you prefer to go?
          <br></br>
          <input
            type="text"
            value={place}
            onChange={(inpu1) => setPlace(inpu1.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter your favourite place..."
            
            onKeyDown = {(inpu1) =>{
              if(inpu1.key === "Enter"){
                console.log("You chose",place,"is the next place you want to go");
                inpu1.target.blur(); // exit from the input
              }
            }}
          />
        </h2>
      </div>

      <div className='mt-10'>
        <h2 className='text-xl my-3 font-medium'>
          How many days do you plan your trip?
          <br></br>
          <input
            type="number"
            value={day}
            onChange={(inpu2) => setDay(inpu2.target.value)}
            className="border text-center w-30 p-2 rounded"
            placeholder="days"

            onKeyDown = {(inpu2) => {
              if(day < 0){
                setError("Please choose a positive integer ^_^")
              }else setError("");
              if(inpu2.key === "Enter"){
                console.log(`Let's enjoying ${day} fantastic day${day > 1 ? "s" : ""}`);
                inpu2.target.blur();
              }
            }}
          />
          <button onClick={increase} className="p-2 bg-green-500 text-white rounded mx-2 w-10">+</button>
          <button onClick={decrease} className="p-2 bg-red-500 text-white rounded mx-2 w-10">-</button>
          <button className="p-2 bg-yellow-500 text-white rounded mx-2 w-20 text-center"
            onClick={() => {
              if(day < 0) setError("Please choose a positive integer ^_^")
              else {
                setError("")
                console.log(`Let's enjoying ${day} fantastic day${day > 1 ? "s" : ""}`)
              }
            }} 
          >OK</button>
          <br></br>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </h2>
      </div>

      <div className='mt-10'>
        <h2 className='text-xl my-3 font-medium'>
          How much is your budget?
        </h2>
        <div className='grid grid-cols-4 gap-5 mt-5'>
          {SelectBudget.map((item, index) => (
            <div key={index} 
              onClick = {() => {
                setPeople(item.title);
                console.log("You chose:", item.title);
              }}
              className={`p-4 border cursor-pointer
                rounded-lg hover:shadow-lg
                ${formData?.budget==item.title&&'shadow-lg border-red-400'}
              `}>
              <h2 className='text-3xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.descrip}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-xl my-3 font-medium'>
          Who do you want to travel along with?
        </h2>
        <div className='grid grid-cols-4 gap-5 mt-5'>
          {SelectPartners.map((item, index) => (
            <div key={index} 
              onClick = {() => {
                setPeople(item.title);
                console.log("You chose:", item.title);
                console.log(`You go with ${item.people} people`)
              }}
              className='p-4 border cursor-pointer rounded-lg hover:shadow-lg'>
              <h2 className='text-3xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.descrip}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className = 'mt-20 mb-10 justify-end flex'>
          <Button className = 'w-40 h-15 text-1xl'>Generate Trip</Button>
      </div>
    </div>
    
  )
}

export default CreateTrip
*/