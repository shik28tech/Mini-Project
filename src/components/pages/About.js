import React from 'react';
import '../pages/About.css'

function About() {
return(
  <>
  <div className='Section'>
    <div className='container'>
      <div className='contant-section'>
        <div className='title'>
          <h1>
            About Project
          </h1>
        </div>
        <div className='content'>
            <h3 >ABSTRACT</h3>
            <p>In today’s world, we all are facing issues related to global warming because of the growing pollution rate and the AQI level.
                People think that government is not paying much attention to overcome such situations, well that’s not the case instead many NGOs together with government are working hard to bring down the pollution rate.
                Therefore, keeping in mind to the above criteria we have decided to give people a platform wherein they can easily look for an NGO and work together as a team to overcome the situation.
            </p>
        </div>
      </div>
    </div>
  </div>
  <h1>Project Team</h1>
  <div class="row">
    <div class="column">
      <div className="card">
        <div className="card__title">Member 1</div>
          <div className="card__body">
              <h2>Name - Shikar Mathur</h2>
              <h2>Reg. No -- 201900414</h2>
              <h2>Sec - C</h2>
              <h2>Sikkim Manipal Instritute Of Technology</h2>         
          </div>
        </div>
      </div>
    <div class="column">
      <div className="card">
        <div className="card__title">Member 2</div>
          <div className="card__body">
              <h2>Name - Varun Taduri</h2>
              <h2>Reg. No -- 201900365</h2>
              <h2>Sec - C</h2>
              <h2>Sikkim Manipal Instritute Of Technology</h2>         
          </div>
        </div>
      </div>
    <div class="column">
      <div className="card">
        <div className="card__title">Member 3</div>
          <div className="card__body">
              <h2>Name - Nikhil Rathore</h2>
              <h2>Reg. No -- 201900367</h2>
              <h2>Sec - C</h2>
              <h2>Sikkim Manipal Instritute Of Technology</h2>         
          </div>
        </div>
    </div>
  </div>
  <div className='second'>
    <h1>INTRODUCTION OF PROJECT</h1>
    <p>
    Pollution is the introduction of harmful materials into the environment which are called pollutants. Pollutants can be natural, such as volcanic ash. They can also be created by human activity, such as trash or runoff produced by factories. Pollutants damage the quality of air, water, and land. 
    Forests fires pose a threat not only to the forest wealth but also to the entire fauna and flora seriously disturbing the bio-diversity and the ecology and environment of a region. 
    Forest fires are caused by Natural causes as well as Man made causes:
    Natural causes - Many forest fires start from natural causes such as lightning which set trees on fire. However, rain extinguishes such fires without causing much damage. High atmospheric temperatures and dryness (low humidity) offer favorable circumstance for a fire to start.
    Man made causes - Fire is caused when a source of fire like naked flame, cigarette or bidi, electric spark or any source of ignition meets inflammable material. 
    </p>
  </div>
  </>

);
}

export default About;