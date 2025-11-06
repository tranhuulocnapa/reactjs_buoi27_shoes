import React, { useState } from 'react'
import Itemproduct from './item'
import data from "./data.json"

export default function Listproduct(props) {

    const { productfromitemprops } = props

    const [item, setitem] = useState(data);

    const [open, setOpen] = useState(false);

    const productlist = (item) => {

        productfromitemprops(item)
    }

    const itemmap = item.map((product) => <Itemproduct key={product.id} productprops={product} productlistprops={productlist} />)




    return (
        <>


            <header className="shadow-md bg-white sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                    <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
                        <span className="text-blue-600">Shoes</span>Shop
                    </h1>


                    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <a href="#" className="hover:text-blue-600 transition">Home</a>
                        <a href="#" className="hover:text-blue-600 transition">Products</a>
                        <a href="#" className="hover:text-blue-600 transition">Sale</a>
                        <a href="#" className="hover:text-blue-600 transition">Contact</a>
                    </nav>


                    <div className="hidden md:block">
                        <input
                            type="text"
                            placeholder="Search shoes..."
                            className="border rounded-full px-3 py-1 w-48 hover:w-60 transition-all duration-300"
                        />
                    </div>


                    <div className="relative text-2xl cursor-pointer">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            3
                        </span>
                    </div>


                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✖" : "☰"}
                    </button>
                </div>


                {open && (
                    <div className="md:hidden bg-white border-t text-center py-4 space-y-4">
                        <a href="#" className="block hover:text-blue-600">Home</a>
                        <a href="#" className="block hover:text-blue-600">Products</a>
                        <a href="#" className="block hover:text-blue-600">Sale</a>
                        <a href="#" className="block hover:text-blue-600">Contact</a>

                        <input
                            type="text"
                            placeholder="Search shoes..."
                            className="border rounded-full px-3 py-1 w-4/5"
                        />
                    </div>
                )}
            </header>


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-4">
                {itemmap}
            </div>





        </>


    )
}
