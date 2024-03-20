import { NavLink } from "react-router-dom";

function CategoryCard() {
  return (
      <>
          <div className="col-span-full text-center text-3xl font-bold mb-6 tracking-wide mt-10 mb-6">SHOP BY CATEGORY</div>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-10">
              <div className="bg-white rounded-lg p-4 mx-2 my-4 flex flex-col justify-center items-center w-full">
                  <div>
                      <img className="rounded-3xl mb-4 w-full h-80 align-center" src="https://img.freepik.com/free-photo/potted-houseplants-table-white-background_53876-129993.jpg?t=st=1710971033~exp=1710974633~hmac=db19ded0d1dbb4d45cb5f81d4e9f5e575d5da852d8ec77030d96950109ee5932&w=1380" alt="" />

                      <div className="flex items-center justify-between mt-6">
                          <NavLink to ={`/products?size=small`} type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 font-large font-bold rounded-lg text-sm px-5 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700">SMALL PLANTS</NavLink>
                      </div>
                  </div>
              </div>

              <div className="bg-white rounded-lg p-4 mx-2 my-4 align-center items-center w-full">
                  <div>
                      <img className="rounded-3xl mb-4 w-full h-80 " src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022051.jpg?t=st=1710970970~exp=1710974570~hmac=9813cc8340803c0a854ac20376860ff1b14fb9615787fee86bda22edcaccc15c&w=1380" alt="" />

                      <div className="flex items-center justify-between mt-6">
                      <NavLink to ={`/products?size=medium`} type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 font-large font-bold rounded-lg text-sm px-5 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">MEDIUM PLANTS</NavLink>
                      </div>
                  </div>
              </div>

              <div className="bg-white rounded-lg p-4 mx-2 my-4 items-center w-full">
                  <div>
                      <img className="rounded-3xl mb-4 w-full h-80 " src="https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg" alt="" />

                      <div className="flex items-center justify-between mt-6">
                      <NavLink to ={`/products?size=large`} type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 font-large font-bold rounded-lg text-sm px-5 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">LARGE PLANTS</NavLink>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default CategoryCard;