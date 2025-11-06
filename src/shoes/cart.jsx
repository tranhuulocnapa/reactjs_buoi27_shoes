import React from 'react'

export default function Cart(props) {
    const { cartprops } = props

    const rendercart = () => {

        return cartprops.map((product) => {
            return (

                <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={product.image} className="w-14 h-14 rounded-md" />
                        <div>
                            <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>

                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 font-bold">-</button>
                        <span className="w-6 text-center">{product.qty}</span>
                        <button className="w-7 h-7 flex items-center justify-center rounded bg-sky-500 text-white hover:bg-sky-600 font-bold">+</button>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white">${product.price}</p>
                </div>



            );
        })



    }


    return (
        <>

            <div>

                <div id="cart-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-lg max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">

                            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Giỏ hàng
                                </h3>
                                <button data-modal-hide="cart-modal" type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white">
                                    ✖
                                </button>
                            </div>

                            <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                                {rendercart()}
                                {/* 
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src="https://via.placeholder.com/60" className="w-14 h-14 rounded-md" />
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Nike Air Max 90</p>

                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 font-bold">-</button>
                                        <span className="w-6 text-center">1</span>
                                        <button className="w-7 h-7 flex items-center justify-center rounded bg-sky-500 text-white hover:bg-sky-600 font-bold">+</button>
                                    </div>
                                    <p className="font-semibold text-gray-900 dark:text-white">$120</p>
                                </div> */}

                            </div>

                            <div className="p-4 border-t dark:border-gray-700 space-y-3">
                                <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                                    <span>Tổng tiền</span>
                                    <span>$270</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white py-2.5 rounded-lg hover:bg-blue-600">
                                    Mua hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>











        </>
    )
}
