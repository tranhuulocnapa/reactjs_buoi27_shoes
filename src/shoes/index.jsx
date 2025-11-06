import React, { useState } from 'react'
import Listproduct from './list'
import Detail from './detail'
import Cart from './cart'

export default function Shoesstore() {

    const [cart, setcart] = useState([]);

    const [productitem, setproductitem] = useState("")

    const productfromitem = (item) => {
        setproductitem(item)
    }

    const addcartfromlist = (addcart) => {


        const productcart = {
            id: addcart.id,
            name: addcart.name,
            price: addcart.price,
            image: addcart.image,
            qty: 1,
        }

        const newcart = [...cart]
        newcart.push(productcart)
        setcart(newcart);


    }



    return (
        <div>


            <Listproduct productfromitemprops={productfromitem} addcartfromlistprops={addcartfromlist} />
            <Detail productitemprops={productitem} />
            <Cart cartprops={cart} />

        </div>
    )
}
