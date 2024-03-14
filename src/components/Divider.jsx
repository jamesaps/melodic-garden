import React from 'react';

const Divider = () => {
    return (
        <div className="container mx-auto">
        <div className="h-screen bg-gray-50 flex items-center">
        <section className="w-full bg-cover bg-center py-32" style={{backgroundImage: "url('https://images.pexels.com/photos/5570227/pexels-photo-5570227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
            <div className="container mx-auto text-center text-white">
                <h1 className="text-5xl font-medium mb-6">A curated collection of lush greenery,</h1>
                <p className="text-xl mb-12">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space </p>
            </div>
        </section>
    </div>
 </div>
      );
    };



export default Divider;