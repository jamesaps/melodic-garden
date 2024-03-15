import React from 'react';

const Divider = () => {
    return (
        <div className="containe h-screen"> {/* I used h-screen for viewing in dev mode, needs to be removed when ready to use compo*/}
            <div className="relative w-full">
             <div className="absolute inset-0"> 
                 <section className="w-full bg-cover bg-center py-40 md:py-40 text-white relative opacity-90" style={{backgroundImage: "url('https://images.pexels.com/photos/6373479/pexels-photo-6373479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
                     <div className="absolute text-center p-10 inset-0 bg-green-900 opacity-90">
                         <h1 className="text-3xl md:text-5xl font-medium mb-1">Explore our diverse selection, ranging from vibrant succulents to majestic ferns. </h1>
                         <p className="text-base md:text-lg p-2 md:p-8">A curated collection of lush greenery, carefully chosen to bring vitality and style to your space </p>
                    </div>
                </section>
             </div>
            </div>
        </div>
      );
    };



export default Divider;