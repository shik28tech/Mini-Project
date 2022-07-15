import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>KNOW MORE ABOUT NGO</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pic1.jpg'
              text='Environmental NGOs can play a crucial role in helping to plug gaps by conducting research to facilitate policy development, building institutional capacity, and facilitating independent dialogue with civil society to help people live more sustainable lifestyles.'
              path='/services'
            />
            <CardItem
              src='images/pic2.jpg'
              text='NGOs play great role in environmental sustainability by addressing climate change, energy, waste management, pollution, biodiversity and land use.'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pic3.jpg'
              text='World hunger, global warming, increasing natural disasters, polluted air, water and soil, pesticide use in the fields, Species extinction, crop failures - we must not believe that we, as the only living beings on a sick planet, remain healthy. '
              path='/services'
            />
            <CardItem
              src='images/pic4.jpg'
              text='The environmental NGOs play significant role in collaboration with the government, corporations and villagers on carbon emissions, in protecting forest and revenue wasteland, in creating awareness on water and air pollution as well as in bringing important environmental issues to the forefront.'
              path='/products'
            />
            <CardItem
              src='images/pic6.jpg'
              text='In nature, everything is interrelated.'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
