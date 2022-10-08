import React from "react";

const Navbar = () => {
    return (
        // nav proper 
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <img className="navbar-brand img-fluid" src="images/logoo.png" alt=""></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav breadcrumb me-auto mb-2 mb-lg-0">
                        <li className="nav-item breadcrumb-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#deals" tabindex="-1" aria-disabled="true">Promotion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;