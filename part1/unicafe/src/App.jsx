import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return ( 
    <>
      <h1>{props.text}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
} 

const GiveFeedback = (props) => {
  return (
    <div>
      <Header text="give feedback" />    
      <Button handleClick={() => props.feedback[0].set(props.feedback[0].value + 1)} text={props.feedback[0].text} />
      <Button handleClick={() => props.feedback[1].set(props.feedback[1].value + 1)} text={props.feedback[1].text} />
      <Button handleClick={() => props.feedback[2].set(props.feedback[2].value + 1)} text={props.feedback[2].text} />
    </div>
  )
}

const StatisticsLine = (props) => {

  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )

}


const Statistics = (props) => {

  const all = props.info[0].value + props.info[1].value + props.info[2].value;
  const average = (props.info[0].value + props.info[1].value * (0) + props.info[2].value * (-1)) / all;
  const positivePercentage = props.info[0].value / all * 100;

  if (all > 0) {
    return (
      <div>
        <table>
            <thead>
              <tr>
                <th>
                  <Header text="statistics" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><StatisticsLine text={props.info[0].text} value={props.info[0].value} /></td>
              </tr>
              <tr>
                <td><StatisticsLine text={props.info[1].text} value={props.info[1].value} /></td>
              </tr>
              <tr>
                <td><StatisticsLine text={props.info[2].text} value={props.info[2].value} /></td>
              </tr>
              <tr>
                <td><StatisticsLine text="All" value={all} /></td>
              </tr>
              <tr>
                <td> <StatisticsLine text="Average" value={average} /></td>
              </tr>
              <tr>
                <td><StatisticsLine text="Positive" value={positivePercentage} /></td>
              </tr>
            </tbody>  
        </table>       
      </div>
    )
  } else {
    return (
      <div>
        <Header text="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }
}




const App = ()=> {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const info = [
    {
      value: good,
      set: setGood,
      text: "Good"
    },
    {
      value: neutral,
      set: setNeutral,
      text: "Neutral"
    },
    {
      value: bad,
      set: setBad,
      text: "Bad"
    }
  ]

  

  return (
    <div>
      <GiveFeedback feedback = {info} />
      <Statistics info = {info} />
    </div>
  )

}

export default App
