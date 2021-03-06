import React, { useState } from 'react'
import { Result } from './Result'


const company = ['BFF',
  'Your Pet',
  'Your Mother',
  'No one',
  'Your Bed',
  'Random Stranger',
  'Michael Scott',
  'Donald Trump']

const planets = ['Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune']

const Question = {
  Q1: "What's your name?",
  Q2: "Which planet would you like to visit?",
  Q3: "Who would you bring?"
}

export const Survey = () => {

  const [name, setName] = useState("")
  const [bringWith, setBringWith] = useState("")
  const [whichPlanet, setWhichPlanet] = useState("")
  const [showSummary, setShowSummary] = useState(false)

  return (
    <div>
      {!showSummary && (
        <form
          className="user-form"
          onSubmit={event => {
            setShowSummary(true)
            event.preventDefault()
            window.scrollTo(0, 0)}}>

          <div className="completeSurvey">

            <div className="nameInput">
              <h2>{Question.Q1}</h2>

              <input type="text" className="text-input"
                onChange={event => setName(event.target.value)}
                value={name} placeholder="Your Name" tabIndex="0" required />
            </div>


            <div className="select-planet">
              <h2>{Question.Q2}</h2>

              <div className="planets">
                {planets.map(planet => (
                  <label key={planet} className="radio-btn" tabIndex="0">
                    <input type="radio"
                      name="radio"
                      value={planet}
                      onChange={event => setWhichPlanet(event.target.value)}
                      checked={whichPlanet === planet}
                      id={planet}
                      className="radio"
                      required />

                    <span className="check"></span>
                    {planet}

                  </label>
                ))}
              </div>
            </div>


            <div className="question">
              <h2>{Question.Q3}</h2>

              <div>
                <select required
                  onChange={event => setBringWith(event.target.value)}
                  value={bringWith}
                  tabIndex="0"
                  checked={bringWith === company}>

                  <option disabled></option>
                  {company.map(who => (
                    <option key={who} value={who} tabIndex="0" required>{who}</option>
                  ))}
                </select>
              </div>

              <div className="submit-btn">
                <button className="button"
                  tabIndex="0">
                    <div className="slide" />
                    <span>Done!</span></button>
              </div>


            </div>
          </div>
        </form>

      )}
      {showSummary && <Result name={name} whichPlanet={whichPlanet} bringWith={bringWith} />}
    </div>
  )
}