import axios from "axios";
import React from "react";
import {useParams} from "react-router-dom";
import styledComponents from "styled-components";

const DetailsWrapper = styledComponents.div`
*{
    background-color: green;
}
.main{
    text-align: center;
    font-size: 45px;
    margin-top: 120px;
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
            // setInterval(() => {
            //     count.current += 1;
            //     console.log(count);
            // }, 1000);
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
                console.log(count.current);
                setImage(images[count.current]);
                
            },3000)
        }

    },[images])

    
    return (!!state.title) ? (
        <DetailsWrapper>
            <div className="main">
                <img src={image} alt="t-shirt" />
            </div>
        </DetailsWrapper>
    ) :  (null)
}

export {Details};