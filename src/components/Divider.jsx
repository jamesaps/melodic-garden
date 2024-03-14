import React from 'react';

const Divider = () => {
    return (
        <div className="container max-w-auto object-fill ">
        <div className="w-full h-screen items-center">
        <section className=" bg-center py-20 backdrop-opacity-5" style={{backgroundImage: "url('https://images.pexels.com/photos/5570227/pexels-photo-5570227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" , backgroundSize: "100% auto", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="text-center text-white">
                <h1 className="text-5xl font-medium mb-6">A curated collection of lush greenery,</h1>
                <p className="text-xl mb-12">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space </p>
            </div>
        </section>
    </div>
 </div>

      );
    };



export default Divider;