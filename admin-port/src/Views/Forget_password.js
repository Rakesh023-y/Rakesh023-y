import React from "react";
import { useHistory } from "react-router-dom";

const Forget_password = () => {

    const history = useHistory();

    const handleLogin = () => {
        history.push("./Login")
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-3 bg-dark left-side login_left_side">
                    {/* <img className="logo" src="{logo}"/>  */}
                </div>
                <div className="col-sm-8 col-md-8 col-lg-9">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-5 top_margin">
                            <h1 className="text-grey text-center my-3">Forgot Password?</h1>
                            <div class="mb-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Please enter your Email" />
                            </div>
                            <div className="">
                                <button className="btn btn-primary w-100 my-3">Reset Password</button>
                            </div>
                            <div className="my-3 d-flex justify-content-center text-primary cursor_pointer"
                                onClick={handleLogin}>Return To Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forget_password;