import React from "react";

const Divider = () => {
  return (
    <div className="max-w-auto container object-fill ">
      <div className="h-screen w-full items-center">
        <section
          className=" bg-center py-20 backdrop-opacity-5"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5570227/pexels-photo-5570227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: "100% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center text-white">
            <h1 className="mb-6 text-5xl font-medium">
              A curated collection of lush greenery,
            </h1>
            <p className="mb-12 text-xl">
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
