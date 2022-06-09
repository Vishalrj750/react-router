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

    
    React.useEffect(()=>{
        axios.get(`http://localhost:3004/items/${param.id}`)
        .then((res)=>setState(res.data))
        .catch((err)=>console.log(err))
    },[])

    
    return(
        <DetailsWrapper>
            <div className="main">
                {!!state.images ? <img src={`${state.images.image1}`} alt="t-shirt" /> : null}
            </div>
        </DetailsWrapper>
    )
}

export {Details};