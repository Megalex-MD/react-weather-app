import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.scss'
import CurrentWeather from './components/currentWeather/CurrentWeather';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [def, setDef] = useState('')
  let defUrl = `https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=67d39ca99a5ac5a381ddd9e936f85229&units=metric`

  const defValue = async () => {
    await axios.get(defUrl).then(response => {
      setDef(response.data)
    })
    setIsLoading(false)
  }

  useEffect(() => {
    defValue()
  }, [])

  if (isLoading) {
    return <div> loading...</div>
  }

  return (
    <div className="app">
      <div className='container'>
        <CurrentWeather def={def} />
      </div>

    </div >
  );
}

export default App;
