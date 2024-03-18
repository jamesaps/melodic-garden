// import React from 'react';

function productCard() {
  return (
    <div className="p-a max-w-sm rounded-lg bg-white">
      <a href="#">
        <img
          className="mb-4 h-auto w-full rounded-3xl"
          src="https://img.freepik.com/free-photo/calathea-plant-gray-pot_53876-133131.jpg?t=st=1710359315~exp=1710362915~hmac=55aa0c17f0e85688fd8f6e085696f872ebaeb80dca2e6da9b7457e2761625aac&w=826"
          alt=""
        />

        <div className="mt-8 flex items-center justify-between">
          <span className="ml-7 text-3xl text-gray-900 dark:text-white">
            Calathea
          </span>
          <span className="mr-7 text-3xl font-bold text-gray-900 dark:text-white">
            £25.00
          </span>
        </div>
      </a>
    </div>
  );
}

export default productCard;
