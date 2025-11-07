import { useState } from 'react'
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

        const index = newcart.findIndex((product) => product.id === productcart.id)

        if (index === -1) {
            //chưa tìm thấy
            newcart.push(productcart)

        } else {
            //đã tìm thấy
            newcart[index].qty += 1;
        }


        setcart(newcart);
    }

    const updonwitemcart = (id, status) => {

        let newcart = [...cart]
        const index = newcart.findIndex((product) => product.id === id)

        if (index !== -1) {

            if (status) {

                newcart[index].qty += 1;

            } else {
                newcart[index].qty -= 1;

                if (newcart[index].qty === 0) {
                    newcart = newcart.filter((product) => product.id !== id)

                }

            }
        }
        setcart(newcart);

    }

    const totalqty = () => {
        return cart.reduce((total, product) => total += product.qty, 0)
    }

    const totalprice = () => {
        return cart.reduce((total, product) => total += (product.qty * product.price), 0)
    }

    return (
        <div>


            <Listproduct productfromitemprops={productfromitem} addcartfromlistprops={addcartfromlist} totalqtyprops={totalqty} />
            <Detail productitemprops={productitem} />
            <Cart cartprops={cart} updonwitemcartprops={updonwitemcart} totalpriceprops={totalprice} />

        </div>
    )
}
