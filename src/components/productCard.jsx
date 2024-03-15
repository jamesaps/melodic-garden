// import React from 'react';

function productCard() {
    return (
        <div className="max-w-sm bg-white rounded-lg p-a">
            <a href="#">
                <img className="rounded-3xl mb-4 w-full h-auto" src="https://img.freepik.com/free-photo/calathea-plant-gray-pot_53876-133131.jpg?t=st=1710359315~exp=1710362915~hmac=55aa0c17f0e85688fd8f6e085696f872ebaeb80dca2e6da9b7457e2761625aac&w=826" alt="" />
            
            <div className="flex items-center justify-between mt-8">
                <span className="text-3xl text-gray-900 dark:text-white ml-7">Calathea</span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mr-7">£25.00</span>
            </div>
            </a>
        </div>
   )
}

export default productCard;