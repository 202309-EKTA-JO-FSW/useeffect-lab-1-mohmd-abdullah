import { useState, useEffect } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  const [data, setData] = useState(!null);
  const [inputText, setInputText] = useState("")
  // And you will fetch the data with useEffect
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/${inputText}')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  //console.log("ID: ", data.id);
  //console.log(data.id);

  function formInput(input) {
    setInputText(input)
  }
  
  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?*/
      }
      <Form setNumberOfDogs={formInput} />
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <DogList dogsList={data['message']} />
    </div>
  );
}

