// import React from 'react';

function categoryCards() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <div className="col-span-full mb-4 text-center text-3xl font-bold tracking-wide">
        SHOP BY CATEGORY{" "}
      </div>
      <div className="p-a mx-2 my-4 max-w-sm rounded-lg bg-white">
        <a href="#">
          <img
            className="mb-4 h-80 w-full rounded-3xl hover:opacity-80"
            src="https://img.freepik.com/free-photo/popular-potted-houseplants-white-background_53876-127000.jpg?w=1380&t=st=1710365315~exp=1710365915~hmac=f3055e21728a0253c7d4b9d2b9097b0466521cc5e912cb0c8ed55f4d168810f2"
            alt=""
          />

          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className="font-large w-full rounded-lg bg-green-700 px-5 py-3 text-center text-sm font-bold text-white hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 "
            >
              SMALL PLANTS
            </button>
          </div>
        </a>
      </div>

      <div className="p-a mx-2 my-4 max-w-sm rounded-lg bg-white">
        <a href="#">
          <img
            className="mb-4 h-80 w-full rounded-3xl hover:opacity-80"
            src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022051.jpg?t=st=1710365164~exp=1710368764~hmac=43ec1454928d5de199b7fa705246e484543b0afa77a9477c3b1855158027fb4c&w=1380"
            alt=""
          />

          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className="font-large w-full rounded-lg bg-green-700 px-5 py-3 text-center text-sm font-bold text-white hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              MEDIUM PLANTS
            </button>
          </div>
        </a>
      </div>

      <div className="p-a mx-2 my-4 max-w-sm rounded-lg bg-white">
        <a href="#">
          <img
            className="mb-4 h-80 w-full rounded-3xl hover:opacity-80"
            src="https://img.freepik.com/free-photo/close-up-various-fresh-potted-plants_23-2147929418.jpg?t=st=1710364525~exp=1710368125~hmac=2b064f3ad902d370e6da9e4a8ea221fe459a96ba4e148e054dc025fe5f3a9fb9&w=826"
            alt=""
          />

          <div className="mt-6 flex items-center justify-between">
            <button
              type="submit"
              className="font-large w-full rounded-lg bg-green-700 px-5 py-3 text-center text-sm font-bold text-white hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              LARGE PLANTS
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default categoryCards;
