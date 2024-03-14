import React from 'react';

const Divider = () => {
    return (
        <div className="container mx-auto">
        <div className="relative w-full ">
        <div className="absolute inset-0"> 
        <section className="w-full bg-cover bg-center py-40 md:py-40 text-white relative opacity-90" style={{backgroundImage: "url('https://images.pexels.com/photos/5570227/pexels-photo-5570227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="absolute p-10 inset-0 bg-green-900 opacity-90">
                <h1 className="text-3xl md:text-5xl font-medium mb-1">Explore our diverse selection, ranging from vibrant succulents to majestic ferns. </h1>
                <p className="text-base md:text-lg p-3 md:p-8">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space </p>
                </div>
                </div>
        </section>
    </div>
 </div>
 </div>
      );
    };



export default Divider;