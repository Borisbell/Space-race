import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='race-wrapper'>
        <div className="race__top-section">
          <button className='button__leader'>Лидеры</button>   
          <div className="top-section__subheader">
            <h1 className='race__header'>Космо Гонка</h1>
            <div className="header__rules">
              <h3>Собери первым 500</h3>
              <img src="src/assets/cards-icon.svg" alt="Карточки"/>
            </div>
            <button className='button__study'>Заниматься</button>
          </div>
          <div className="timer">
            <img src="src/assets/timer-icon.svg" alt="Карточки"/>
            <p>70 дней</p>
          </div>
        </div>
        <ul className="race__table">
          <li className="race__line">
            <div className="race__line-info">
              <h3 className='race__line-position'>1</h3>
              <img src="src/assets/ava.svg" alt="" className='race__line-avatar'/>
              <h3 className='race__line-name'>Алиса</h3>
            </div>
            <div className="race__line-track">
              <div className="race-car">
                <img src="src/assets/car.svg" alt="Car omage" />
                <div className="race-car__counter">
                  <p className='race-car__counter-text'>20</p>
                  <img src="src/assets/cards-icon-small.svg" alt="" />
                </div>
              </div>
            </div>
          </li>
          <li className="race__line">
            <div className="race__line-info">
              <h3 className='race__line-position'>1</h3>
              <img src="src/assets/ava.svg" alt="" className='race__line-avatar'/>
              <h3 className='race__line-name'>Алиса</h3>
            </div>
            <div className="race__line-track">
              <div className="race-car">
                <img src="src/assets/car.svg" alt="Car omage" />
                <div className="race-car__counter">
                  <p className='race-car__counter-text'>20</p>
                  <img src="src/assets/cards-icon-small.svg" alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
