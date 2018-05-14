import React from 'react';
import './app.css';

export default function GuessForm () {
  return (
    <form>
  <input type="text" name="userGuess" id="userGuess" 
  lass="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required=""/>
  <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
    </form>




  )
}