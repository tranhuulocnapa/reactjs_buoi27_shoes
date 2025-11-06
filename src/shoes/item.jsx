export default function Itemproduct(props) {

    const { productprops, productlistprops, addcartfromitemprops } = props

    const productitemclick = () => {
        productlistprops(productprops)

    }

    const addcart = () => {
        addcartfromitemprops(productprops)
    }


    return (
        <div >

            <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition cursor-pointer bg-white flex flex-col h-full">

                <div onClick={productitemclick} data-modal-target="product-modal" data-modal-toggle="product-modal">
                    <div className="w-full h-48 flex items-center justify-center">
                        <img
                            src={productprops.image}
                            alt={productprops.name}
                            className="max-h-full object-contain"
                        />
                    </div>

                    <h2 className="text-lg font-semibold mt-3">{productprops.name}</h2>

                    <p className="text-gray-500 text-sm grow">
                        {productprops.shortDescription}
                    </p>

                    <p className="text-red-500 font-bold text-xl mt-2">
                        ${productprops.price}
                    </p>
                </div>
                <button onClick={addcart} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Add to cart
                </button>
            </div>


        </div>
    )
}
