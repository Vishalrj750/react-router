import React from "react";
import styledComponents from "styled-components";

const HomeWrapper = styledComponents.div`

.main div{
    text-align: center;
}
`

function Home() {
    return(
        <HomeWrapper>
            <div className="main">
                <div>
                    <h1>This is my Home Page</h1>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home;