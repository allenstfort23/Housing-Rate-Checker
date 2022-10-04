import React from 'react'
import './stylesheets/home.css'

function Home() {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                {/* Working on fixing spline object */}
            </div>
            <div className="home-section">
                <p>More demo text here</p>
            </div>
        </div>
    )
}

export default Home