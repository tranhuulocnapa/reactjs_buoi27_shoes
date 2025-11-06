import React from 'react'

export default function Detail(props) {
    const { productitemprops } = props



    return (
        <div>

            <div>

                {/* <button data-modal-target="product-modal" data-modal-toggle="product-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Xem chi tiết
                </button> */}

                <div id="product-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-3xl max-h-full">

                        <div className="relative bg-white rounded-lg shadow-sm border border-gray-200">

                            <div className="flex items-center justify-between p-4 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {productitemprops.name}
                                </h3>
                                <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center" data-modal-hide="product-modal">
                                    ✕
                                </button>
                            </div>

                            <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-2 gap-6">

                                <img src={productitemprops.image} alt={productitemprops.name} className="w-full h-64 object-contain rounded-lg" />

                                <div className="space-y-3">
                                    <p className="text-gray-600 text-sm">
                                        {productitemprops.description}
                                    </p>
                                    <p className="text-2xl font-bold text-red-500">${productitemprops.price}</p>

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

                            <div className="flex justify-end p-4 border-t">
                                <button data-modal-hide="product-modal" className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
