import React from "react";
import './Upper.css';
import image from './images.jpg';
function Upper() {
    return (
        <>
            <div className="container my-2">
                <h1>Welcome John!</h1>
                <h4>How to get jobs with top U.S. companies</h4>
                <div className="row">
                    <div className="col-sm-3 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">1</h5>
                                <p className="card-text">Take 1 tests.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">2</h5>
                                <p className="card-text">Pass live coding challenge.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">3</h5>
                                <p className="card-text">Finalize your resume.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">4</h5>
                                <p className="card-text">Receive job offers.</p>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="container">
                <div className="row">
                <div className="col-sm-6">

                <figure className="figure">
                    <img src={image} alt="logo" className="figure-img img-fluid rounded" />
                </figure>
                </div>
                <div className="col-sm-6">
                    <h1 className="heading">Why Join</h1>
                    <div className="points my-4">
                    <p>1.  Work full-time at top Silicon Valley or other U.S. companies.</p>
                    <p>2. Earn a better salary compared to local companies in your city.</p>
                    <p>3. Grow as a developer by working with the smartest engineers from all over the world.</p>
                    <p>4. Get paid monthly directly to your bank account, Forget about issues with PayPal or Payonner.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default Upper;