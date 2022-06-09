import axios from "axios";
import React from "react";
import styledComponents from "styled-components";
import { Card } from "./Card";

const ProductsWrapper = styledComponents.div`
.main{
    text-align: center;
}
`

function Products() {
    const [items, setItems] = React.useState([]);


    React.useEffect(()=>{
        axios.get('http://localhost:3004/items')
        .then((res)=>setItems(res.data))
        .catch((err)=>console.log(err))
    },[])
    return(
        <ProductsWrapper>
            <div className="main">
                <h1>This is product page</h1>
                {items.map((item)=><Card key={item.id} img_url={item.images.image1} title={item.title} price={item.price} id={item.id} />)}
            </div>
        </ProductsWrapper>
    )
}

export default Products;