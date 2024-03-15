// import React from 'react';

function categoryCard() {
    return (
        <div className="max-w-sm bg-white rounded-lg p-a relative">
            <img className="rounded-3xl mb-4 w-full h-auto drop-shadow-xl" src="https://img.freepik.com/free-vector/aesthetic-phone-wallpaper-background-vector-leaf-shadow-with-natural-light_53876-140790.jpg?t=st=1710443985~exp=1710447585~hmac=08b260a1492168b5c9fa6e3a57b7de5cf7b68f46c8393efa320db3db5cdfbabb&w=740" alt="" />
            <div className="absolute bottom-10 left-5 p-4">
                <h2 className="text-6xl text-black-900 mb-8 font-bold">Featured Plants</h2>
            <p className="text-1xl text-black-900 mb-7 mr-16" style={{ maxWidth: "14rem", textAlign: "justify" }}>A curated collection of lush greenery, carefully chosen to bring vitality and style to your space.</p>
            </div>
            
        </div>
   )
}

export default categoryCard;