import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const CardWrapper = styledComponents.div`
.main{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 95vw;
    height: 200px;
    background-color: aliceblue;
    box-shadow: 5px 5px 5px #cecece;
    margin: 25px;
}
.img{
    height: 100%;
    width: 150px;
}
.img>img{
    width: 100%;
    object-fit: contain;
}
.details{
    width: 350px;
    overflow: hidden;
}
`

function Card({img_url, title, price, id}) {
    return(
        <CardWrapper>
            <div className="main">
                <div className="img"><img src={img_url} alt="T-Shirt" /></div>
                <div className="details">
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                </div>
                <div className="more_details"><Link to={`/products/${id}`}>More Details</Link></div>
            </div>
        </CardWrapper>
    )
}

export { Card };