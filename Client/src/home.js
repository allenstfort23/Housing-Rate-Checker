import React from 'react'
import './stylesheets/home.css'
import HousingImage from "./images/housing-img1.jpeg";
import HousingImage2 from "./images/housing-img2.jpeg";
import HousingImage4 from "./images/housing-img4.jpeg";

function Home() {
    return (
        <div className="container py-5">
            <div className="container-fluid py-5">
                <div class="p-5 mb-4 bg-light rounded">
                    <h1 className="display-5 fw-bold">Housing Checker</h1>
                    <p className="col-md-12 fs-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classNames for typography and spacing to space content out within the larger container.</p>
                    {/* Working on fixing spline object */}

                    <button class="btn btn-primary btn-lg" type="button">Learn More</button>
                </div>
            </div>
            <div className="row g-4 text-center">
                <div className="col">
                    <div className="card text-bg-light">
                        <img className="card-img" alt="parkdale_house_balwyn" src={HousingImage} />
                        <div className="card-img-overlay">
                            {/* <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a className="my-4 btn btn-primary btn-sm">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card text-bg-light">
                        <img className="card-img" alt="parkdale_house_balwyn" src={HousingImage2} />
                        <div className="card-img-overlay">
                            {/* <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a className="my-4 btn btn-primary btn-sm">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card text-bg-light">
                        <img className="card-img" alt="parkdale_house_balwyn" src={HousingImage} />
                        <div className="card-img-overlay">
                            {/* <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a className="my-4 btn btn-primary btn-sm">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home