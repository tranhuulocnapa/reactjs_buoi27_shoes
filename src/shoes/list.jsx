import React, { useState } from 'react'
import Itemproduct from './item'
import data from "./data.json"

export default function Listproduct() {

    const [item, setitem] = useState(data);

    const itemmap = item.map((product) => <Itemproduct key={product.id} productprops={product} />)

    const [open, setOpen] = useState(false);

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

            <div>
                {/* Button mở modal */}
                <button data-modal-target="product-modal" data-modal-toggle="product-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Xem chi tiết
                </button>
                {/* Modal */}
                <div id="product-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-3xl max-h-full">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Adidas Prophere Black White
                                </h3>
                                <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center" data-modal-hide="product-modal">
                                    ✕
                                </button>
                            </div>
                            {/* Body */}
                            <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Product Image */}
                                <img src="https://picsum.photos/400" alt="product image" className="w-full h-64 object-contain rounded-lg" />
                                {/* Product Info */}
                                <div className="space-y-3">
                                    <p className="text-gray-600 text-sm">
                                        ✅ The midsole contains 20% more Boost for amplified comfort.
                                    </p>
                                    <p className="text-2xl font-bold text-red-500">$450</p>
                                    <p className="text-sm text-gray-400">
                                        Category: <span className="font-medium">adidas-prophere</span>
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">-</button>
                                        <span className="px-3">1</span>
                                        <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">+</button>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="flex justify-end p-4 border-t">
                                <button data-modal-hide="product-modal" className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>


    )
}
