import React from 'react';
import Jumbotron from '../Jumbotron'; 
import image1 from '../../assets/sophie.jpeg'; 
import image2 from '../../assets/haydawn.jpeg';
import image3 from '../../assets/adam.jpeg';
import image4 from '../../assets/james.jpeg';
import image5 from '../../assets/jack.jpeg';

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <Jumbotron />
    <div className="my-8">
      <h2 className="text-3xl font-semibold mb-4">About Us</h2>
      <p className="text-lg mb-8">We are a team of five front-end developers driven by our shared passion for crafting functional and inspirational designs. With roots deeply embedded in creativity and innovation, we set out to cultivate an online space where plant enthusiasts can immerse themselves in a world of greenery.
      <br />
       Each member of our team brings a unique blend of skills and perspectives. Our journey began with a simple idea: to create an immersive online experience for plant lovers.
      <br />
      Join us as we cultivate a community of plant lovers, rooted in a shared passion for nature and fueled by the boundless possibilities of the digital space.
      <br />
      Welcome to our botanical haven - we're thrilled to have you here.
      </p>

         <h2 className="text-3xl font-semibold mb-4">Our Team</h2>

      <div className="grid grid-cols-5 gap-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
       <img src={image1} alt="sophie" className="w-full h-auto" />
       <button className="border-black border rounded-full text-black px-4 py-2 w-full">Button 1</button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={image2} alt="haydawn" className="w-full h-auto" />
        <button className="border-black border rounded-full text-black px-4 py-2 w-full">Button 2</button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
         <img src={image3} alt="adam" className="w-full h-auto" />
         <button className="border-black border rounded-full text-black px-4 py-2 w-full">Button 3</button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
         <img src={image4} alt="james" className="w-full h-auto" />
         <button className="border-black border rounded-full text-black px-4 py-2 w-full">Button 4</button>
         </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
         <img src={image5} alt="jack" className="w-full h-auto" />
         <button className="border-black border rounded-full text-black px-4 py-2 w-full">Button 5</button>
        </div>
         </div>
        </div>
         </div>
    );
}

export default AboutUs;