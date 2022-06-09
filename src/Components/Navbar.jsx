import React from "react";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styledComponents.div`
.nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100px;
    background-color: aliceblue;
    box-shadow: 5px 5px 5px #cecece;
}
`

function Navbar() {
    return(
        <NavbarWrapper>
            <div>
                <div className="nav">
                    <Link to={"/"}><h3>Home</h3></Link>
                    <Link to={"/products"}><h3>Products</h3></Link>
                </div>
            </div>
        </NavbarWrapper>
    )
}

export default Navbar;