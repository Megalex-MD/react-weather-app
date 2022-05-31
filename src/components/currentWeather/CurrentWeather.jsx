import React, { useState } from 'react';
import style from './CurrentWeather.module.scss'
import axios from 'axios'
import MyInput from '../UI/input/MyInput';

const CurrentWeather = ({ def, ...props }) => {

  const [location, setLocation] = useState('')
  const [data, setData] = useState('')

  let key = '67d39ca99a5ac5a381ddd9e936f85229'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`

  const searchLocation = async (e) => {
    if (e.key === 'Enter') {
      await axios.get(url).then(response => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div {...props}>
      <div>
        <MyInput
          type='text'
          placeholder='Search...'
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className={style.weatherToday} >
        <div>
          <h5>CURRENT WEATHER</h5>
        </div>
        {data.name ? <h2>{data.name}</h2> : <h2>{def.name}</h2>}
        <div className={style.currentWeather}>
          {data.main
            ? <h1>{data.main.temp.toFixed()}°C</h1>
            : <h1>{def.main.temp.toFixed()}°C</h1>}
          <div>
            {data.main
              ? <p>Feels Like: {data.main.feels_like.toFixed()}°C</p>
              : <p>Feels Like: {def.main.feels_like.toFixed()}°C</p>}
            {data.weather
              ? <p style={{ textTransform: 'capitalize' }}>{data.weather[0].description}</p>
              : <p style={{ textTransform: 'capitalize' }}>{def.weather[0].description}</p>}
          </div>
        </div>
        <div className={style.currentWeatherBottom}>
          <div className={style.humidity}>
            <p>HUMIDITY</p>
            {data.main
              ? <p>{data.main.humidity}%</p>
              : <p>{def.main.humidity}%</p>
            }
          </div>
          <div className={style.wind}>
            <p>WIND</p>
            {data.wind
              ? <p>{data.wind.speed} km/h</p>
              : <p>{def.wind.speed} km/h</p>
            }
          </div>
          <div className={style.visibility}>
            <p>VISIBILITY</p>
            {data.visibility
              ? <p>{Math.round(data.visibility / 1000)} km</p>
              : <p>{Math.round(def.visibility / 1000)} km</p>
            }
          </div>
          <div className={style.pressure}>
            <p>PRESSURE</p>
            {data.main
              ? <p>{data.main.pressure} mb</p>
              : <p>{def.main.pressure} mb</p>
            }
          </div>
        </div>
      </div >
    </div >
  );
};

export default CurrentWeather;