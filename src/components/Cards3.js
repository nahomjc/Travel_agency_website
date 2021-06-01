import React from 'react';
import './Cards3.css';
import CardsItem3 from './CardsItem3';

function Cards() {
  return (
    <div className='cards'>
      <h1>Are you ready to travel!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardsItem3
              src='images/p1.jpg'
              text='Hotel Accommodation Services'
              label='Hotel'
              path='/services'
            />
            <CardsItem3
              src='images/p9.jpg'
              text='Where we do business​ '
              label='Info'
              path='/services'
            />
            <CardsItem3
              src='images/p3.jpg'
              text='Know before you go '
              label='Info'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem3
              src='images/p2.jpg'
              text=' The path forward: Health essentials that will drive business travel '
              label='Health'
              path='/services'
            />
            <CardsItem3
              src='images/p5.jpg'
              text='Call Center
              For more information You can contact us'
              label='Adventure'
              path='/products'
            />
            <CardsItem3
              src='images/p6.jpg'
              text='Agence Guide'
              label='Guide'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem3
              src='images/p7.jpg'
              text='Hotel service'
              label='service'
              path='/services'
            />
            <CardsItem3
              src='images/p8.jpg'
              text='Read our blog '
              label='Blog'
              path='/products'
            />
            <CardsItem3
              src='images/s9.jpg'
              text='Getting back to business travel: Advice for travelers '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
