import React, { useState } from 'react'
import Listproduct from './list'
import Detail from './detail'

export default function Shoesstore() {

    const [productitem, setproductitem] = useState("")

    const productfromitem = (item) => {
        setproductitem(item)
    }

    return (
        <div>


            <Listproduct productfromitemprops={productfromitem} />
            <Detail productitemprops={productitem} />

        </div>
    )
}
