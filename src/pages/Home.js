import React from 'react';

import handbookImage from '../assets/handbook.jpg';

import './Home.css';

const Home = () => (
  <article>
    <header>
      <h1>Hey there</h1>
    </header>

    <p>Fancy seeing you here!</p>
    <p>Wanna take a look at our handbook? <span role="img" aria-label="smile">🙂</span></p>

    <img className="Home-bgImage" src={ handbookImage } alt="handbook" />
  </article>
);

export default Home;
