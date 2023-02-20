import React from "react";
import { useHistory } from "react-router-dom"
const Login = () => {
    const history = useHistory();

    const handleForgetPassword = () => {
        history.push("/Forget_password")
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-md-2 col-lg-3 bg-dark left-side login_left_side">
                    {/* <img className="logo" src={logo}/> */}
                </div>
                <div className="col-sm-8 col-md-8 col-lg-9">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-5 top_margin">
                            <h2 className="text-grey text-center my-3">Admin-Login</h2>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput" />
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatinginput" />
                            </div>
                            <div className=" ">
                                <button className="btn btn-primary w-100 my-3">Login</button>
                            </div>
                            <div className="my-3 d-flex justify-content-center text-primary cursor_pointer"
                                onClick={handleForgetPassword}>Forget password</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;