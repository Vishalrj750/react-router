import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import styledComponents from "styled-components";

const DetailsWrapper = styledComponents.div`
*{
    margin: auto;
}
.main{
    display: flex;
    width: 90vw;
    height: 250px;
    justify-content: space-around;
    align-items: center;
    background-color: aliceblue;
    box-shadow: 5px 5px 5px #cecece;
    margin-top: 25px;
}
.img-div{
    width: 40%;
    height: 100%;
}
.img-div img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.details-div{

}
button{
    background-color: blue;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    margin: 20px;
    color: white;
}
button:hover{
    background-color: white;
    color: blue;
}
`

function Details() {
    const param = useParams();
    const [state, setState] = React.useState({});
    const [images, setImages] = React.useState([]);
    const [image, setImage] = React.useState("");
    const count = React.useRef(0);
    const refId = React.useRef(0);

    
    React.useEffect(()=>{
        axios.get(`http://localhost:3004/items/${param.id}`)
        .then((res)=>setState(res.data))
        .catch((err)=>console.log(err))

        return () => {
            clearInterval(refId.current);
        }
    },[])

    React.useEffect(()=>{
        if(!!state.title){
            const temp = [];
            for(var key in state.images){
                temp.push(state.images[key]);
            }
            setImages(temp);
        }
    },[state])

    React.useEffect(()=>{
        if(images.length && (!refId.current)){
            refId.current = setInterval(()=>{
                if(count.current === images.length-1){
                    count.current = 0;
                }
                else{
                    count.current += 1;
                }
                setImage(images[count.current]);
                
            },3000)
        }

    },[images])

    
    return (!!state.title) ? (
        <DetailsWrapper>
            <div className="main">
                <div className="img-div">
                    <img src={image} alt="t-shirt" />
                </div>
                <div className="details-div">
                    <h2>{state.title + " " + state.color}</h2>
                    <h3>{"Brand - " + state.brand}</h3>
                    <h3>{"₹ " + state.price}</h3>
                    <p>{"Rating " + state.rating + " out of 5"}</p>
                    <button>Add to cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </DetailsWrapper>
    ) :  (null)
}

export {Details};