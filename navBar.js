import React from 'react';
import './app.css'


export default function NavBar (){
  return (
    <nav>
     <ul>
       <li><a className='what' href='#'>What?</a></li>
       <li><a className ='newGame' href='#'>New Game+</a></li>
     </ul>
    </nav>
);
}

