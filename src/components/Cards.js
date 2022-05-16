import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the below Articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pic1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path='/services'
            />
            <CardItem
              src='images/pic2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pic3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <CardItem
              src='images/pic4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/products'
            />
            <CardItem
              src='images/pic6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
