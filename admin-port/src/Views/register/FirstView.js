import React from "react";
import user from "../../Assets/icon/user.svg"
const FirstView = ({ handleSelect }) => {

    return (
        <div>
            <div className="d-flex justify-content-end mt-3">
                <div className=" mx-3 ">
                    <span>
                        <small className="text-primary">Already have an account?</small>
                    </span>
                </div>
                <button className="btn btn-primary "><small>Login</small></button>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <h2 className="text-grey">Choose a Role</h2>
                    </div>
                </div>
                <div className="row my-3 justify-content-center">
                    <div className="col-sm-5">
                        <div className="card ">
                            <div className="card-body register-user-card">
                                <div className="card-icon">
                                    <img src={user} />
                                </div>
                                <h5 className="text-primary text-center my-3">
                                    <strong>I AM A CLIENT</strong>
                                </h5>
                                <div className="text-center text-grey">I would like to</div>
                                <div className="text-center text-grey">post a research job</div>
                                <div className="text-center">
                                    <button className="btn btn-primary register-now-btn"
                                     onClick={() => handleSelect("client")}>Register now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body register-user-card">
                                <div className="card-icon">
                                    <img src={user} />
                                </div>
                                <h5 className="text-primary text-center my-3">
                                    <strong>I AM AN AGENCY</strong>
                                </h5>
                                <div className="text-center text-grey">I would like to</div>
                                <div className="text-center text-grey">find a research job</div>
                                <div className="text-center">
                                    <button className="btn btn-primary register-now-btn" onClick={() => handleSelect("agent")}>Register now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row second-row justify-content-center">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body register-user-card">
                                <div className="card-icon">
                                    <img src={user} />
                                </div>
                                <h5 className="text-primary text-center my-3">
                                    <strong>I AM A FREELANCE</strong>
                                </h5>
                                <div className="text-center text-grey">I would like to</div>
                                <div className="text-center text-grey">find a research job</div>
                                <div className="text-center">
                                    <button className="btn btn-primary register-now-btn" onClick={() => handleSelect("freelance")}>Register now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-body register-user-card">
                                <div className="card-icon">
                                    <img src={user} />
                                </div>
                                <h5 className="text-primary text-center my-3">
                                    <strong>I AM A CLIENT ADMIN</strong>
                                </h5>
                                <div className="text-center text-grey">I would like to</div>
                                <div className="text-center text-grey">manage user(s)</div>
                                <div className="text-center">
                                    <button className="btn btn-primary register-now-btn" onClick={() => handleSelect("admin")}>Register now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default FirstView;