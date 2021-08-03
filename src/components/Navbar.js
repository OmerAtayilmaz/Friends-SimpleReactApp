import React from 'react';
const Navbar=(props)=>{
    return(
        <div>
            <nav className="navbar bg-darkgreen navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/#">{props.titleBrand}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Add User</a>
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}


export default Navbar