import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-4 my-auto mx-auto">
                        <img className="my-auto mx-auto" src="https://www.triip.me/assets/img/triip_tiim_logo.png" alt="logo" style={{ width: 50, height: 50 }}></img>
                    </div>
                    <div className="col-4">
                        <h3>About Triip</h3>
                        <nav className="navbar ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Policies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4">
                        <h3>Product</h3>
                        <nav className="navbar ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Triip stays</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trip experiences</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Trip protocol</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;