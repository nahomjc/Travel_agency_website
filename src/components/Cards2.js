import React from 'react';
import './Cards2.css';
import CardsItem2 from './CardsItem2';

function Cards() {
  return (
    <div className='cards'>
      <h1>Are you ready to travel!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardsItem2
              src='images/s3.jpg'
              text='Pro tips to travel smarter'
              label='Passport'
              path='/services'
            />
            <CardsItem2
              src='images/s2.jpg'
              text='Webinar – How are airports preparing for the return of business travel? '
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem2
              src='images/s4.jpg'
              text='Prep for your next road trip'
              label='Mystery'
              path='/services'
            />
            <CardsItem2
              src='images/s5.jpg'
              text='Nature is calling
              See what the great outdoors has to offer'
              label='Adventure'
              path='/products'
            />
            <CardsItem2
              src='images/s6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem2
              src='images/s7.jpeg'
              text='Prep for your next road trip'
              label='Mystery'
              path='/services'
            />
            <CardsItem2
              src='images/s8.jpg'
              text='Vaccinations and easing travel restrictions '
              label='Vaccinations'
              path='/products'
            />
            <CardsItem2
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
