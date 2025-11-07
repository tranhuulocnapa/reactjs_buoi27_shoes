import { useState } from 'react'
import Itemproduct from './item'
import data from "./data.json"

export default function Listproduct(props) {

    const { productfromitemprops, addcartfromlistprops, totalqtyprops } = props

    const [item, setitem] = useState(data);

    const [open, setOpen] = useState(false);

    const productlist = (item) => {

        productfromitemprops(item)
    }

    const addcartfromitem = (addcart) => {
        addcartfromlistprops(addcart)
    }

    const itemmap = item.map((product) => <Itemproduct key={product.id} productprops={product} productlistprops={productlist} addcartfromitemprops={addcartfromitem} />)




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


                    <div data-modal-target="cart-modal" data-modal-toggle="cart-modal" className="relative text-2xl cursor-pointer">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {totalqtyprops()}
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


            <footer className="bg-white border-t mt-10">
                <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">


                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-blue-600">GOSHOES</h3>
                        <p className="text-sm text-gray-500">
                            Chuyên cung cấp các mẫu giày chính hãng Adidas, Nike, Puma và nhiều thương hiệu nổi tiếng khác.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-3">Sản phẩm</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-500">Adidas</a></li>
                            <li><a href="#" className="hover:text-blue-500">Nike</a></li>
                            <li><a href="#" className="hover:text-blue-500">Puma</a></li>
                            <li><a href="#" className="hover:text-blue-500">New Balance</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-3">Hỗ trợ</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-500">Chính sách đổi trả</a></li>
                            <li><a href="#" className="hover:text-blue-500">Bảo hành sản phẩm</a></li>
                            <li><a href="#" className="hover:text-blue-500">Câu hỏi thường gặp</a></li>
                            <li><a href="#" className="hover:text-blue-500">Liên hệ</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-3">Liên hệ</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📍 123 Lê Lợi, Quận 1, TP. HCM</li>
                            <li>📞 0123 456 789</li>
                            <li>✉️ support@goshoes.vn</li>
                        </ul>
                        <div className="flex gap-3 mt-3">
                            <a href="#" className="text-blue-500 hover:text-blue-600">🌐</a>
                            <a href="#" className="text-blue-500 hover:text-blue-600">📘</a>
                            <a href="#" className="text-blue-500 hover:text-blue-600">📸</a>
                        </div>
                    </div>
                </div>

                <div className="border-t text-center text-sm text-gray-500 py-4">
                    © {new Date().getFullYear()} GOSHOES. All rights reserved.
                </div>
            </footer>

        </>


    )
}
