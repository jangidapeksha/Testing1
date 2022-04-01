import React from "react";
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div >
                        <p id="logo"><img src="./image/logo.png" alt="pbox" /></p>
                    </div>
                </div>
            </div>
            <div id="menu-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link className="btn btn-danger signning" to="/UserData">UserData</Link>
                        <Link className="btn btn-danger signning" to="/CreateUser">CreateUser</Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Header;
