import React from 'react';
import image1 from '../../assets/sophie.jpeg'; 
import image2 from '../../assets/haydawn.jpeg';
import image3 from '../../assets/adam.jpeg';
import image4 from '../../assets/james.jpeg';
import image5 from '../../assets/jack.jpeg';

const AboutUs = () => {
  return (
    <div className="relative w-full">
     <div className="inset-0"> 
         <section className="w-full bg-cover bg-center py-40 md:py-40 text-white relative opacity-100" style={{backgroundImage: "url('https://images.pexels.com/photos/6146822/pexels-photo-6146822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
        </section>
      </div>

    <div className="my-8 p-10">
      <h2 className="text-3xl font-semibold mb-4 text-center">About Us</h2>
      <p className="text-m mb-20">We are a team of 5 front-end developers driven by our shared passion for crafting functional and inspirational designs. With roots deeply embedded in creativity and innovation, we set out to cultivate an online space where plant enthusiasts can immerse themselves in a world of greenery.
      <br />
       Each member of our team brings a unique blend of skills and perspectives. Our journey began with a simple idea: to create an immersive online experience for plant lovers.
      <br />
      Join us as we cultivate a community of plant lovers, rooted in a shared passion for nature and fueled by the boundless possibilities of the digital space.
      <br />
      Welcome to our botanical haven - we're thrilled to have you here.
      </p>

         <h2 className="text-3xl font-semibold mb-4 text-center">Our Team</h2>

      <div className="flex content-center columns-5 gap-4 mb-20">
      <div className="bg-white rounded-lg overflow-hidden ">
      <img src={image1} alt="sophie" className="pb-5 object-cover w-full max-h-80"  />
       <button className="border-black border rounded-full text-black px-4 py-2 w-full">Sophie</button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden ">
        <img src={image2} alt="haydawn" className="pb-5 object-cover w-full max-h-80"  />
        <button className="border-black border rounded-full text-black px-4 py-2 w-full">Haydawn</button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden ">
         <img src={image3} alt="adam" className="pb-5 object-cover w-full max-h-80"  />
         <button className="border-black border rounded-full text-black px-4 py-2 w-full">Adam</button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden ">
         <img src={image4} alt="james" className="pb-5 object-cover w-full max-h-80"  />
         <button className="border-black border rounded-full text-black px-4 py-2 w-full">James</button>
         </div>
         <div className="bg-white rounded-lg overflow-hidden ">
         <img src={image5} alt="jack" className="pb-5 object-cover w-full max-h-80"  />
         <button className="border-black border rounded-full text-black px-4 py-2 w-full">Jack</button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;