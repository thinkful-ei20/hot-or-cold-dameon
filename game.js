import React from 'react';
import './app.css';
import GuessForm from './guessForm';
import GuessCount from './guessCount';
import GuessList from './guessList';




export default function Game(){
  return (
    <section className="game">
      <h2 id='feedback'>Make your guess</h2>
      <GuessForm />
      <GuessCount />
      <GuessList />
    </section>
  )
}

