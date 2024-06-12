import { useState } from 'react'

const Button = (props) => {

  return (
    <button onClick={() => {props.eventHandler()}}>{props.text}</button>
  )

} 

const MostVotes = (props) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[props.mostVoted]}</p>
    </div>
  )

}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time....The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil',
    'Debugging is twice as hard as writting the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosis patients',
    'The only way to go fast, is to go well.'
  ]

  const [mostVoted, setMostVoted] = useState(0) 
  const [vote, setVote] = useState(Array(8).fill(0))
  const [selected, setSelected] = useState(0);

  const set = () => {
    setSelected (Math.floor(Math.random() * anecdotes.length));
  }

  const updateVotes = () => {
    const copy = [...vote];
    copy[selected] = copy[selected] + 1
    setVote(copy)
  }

  const mostVotes = () => {
    for (let i = 0; i < vote.length; i++) {
        if (vote[mostVoted] < vote[i]) {
          setMostVoted(i);
        }
    }

    return mostVoted;
  
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div></div>
      {`has ${vote[selected]} votes`}
      <div></div>
    
      <Button eventHandler={updateVotes} text="vote" />
      <Button eventHandler={set} text= "next acnedote" />
 
      <MostVotes mostVoted = {mostVotes()} anecdotes = {anecdotes}/>

    </div>
  )
}

export default App
