import React from "react";

const Divider = () => {

    return (
<div className="relative w-full">
        <div className="inset-0">
          <section
            className="relative w-full bg-cover bg-center py-40 text-white opacity-90 md:py-40"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6373479/pexels-photo-6373479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            <div className="absolute inset-0 bg-green-900 p-10 text-center opacity-90">
              <h1 className="mb-1 text-3xl font-medium md:text-5xl">
                Explore our diverse selection, ranging from vibrant succulents
                to majestic ferns.{" "}
              </h1>
              <p className="p-2 text-base md:p-8 md:text-lg">
                A curated collection of lush greenery, carefully chosen to bring
                vitality and style to your space{" "}
              </p>
            </div>
          </section>
        </div>
      </div>
   
  );
};

export default Divider;
