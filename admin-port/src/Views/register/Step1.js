import React, { useState } from "react";
import OTPModal from "./OTPModal";
import axios from "axios";

const Step1 = ({ handleStep, handleDataChange, register_data }) => {

    const [open, setOpen] = useState(false);
    const [price_select, setPriceSelect] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [is_valid_email, setValidEmail] = useState(false);
    const [is_valid_mobile, setValidMobile] = useState(false);
    const [is_password_matching, setPasswordMatching] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };
    const getOTP = () => {
        axios({
            url: "http://localhost:5000/otp/get_otp",
            method: "POST",
            data: { number: register_data.mobile },
        })
            .then(res => {
                console.log(res);
            });
    };
    const handleVerified = () => {
        setIsVerified(true);
    };

    const handleSendVerification = () => {
        // getOTP();
        setOpen(true);
    };
    const handleSubmit = () => {
        handleStep(2);
        setOpen(true);
    }
    const getPlanUI = () => {
        return (
            <div className="">
                <div className="my-3">
                    <h4 className="text-primary mt-5 mx-5">Create Account</h4>
                </div>
                <div className="text-primary my-3 mx-5">
                    Please choose your plan in order to Proceed
                </div>
                <div className="card my-3 w-75 mx-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h4><strong>Standard Plan</strong></h4>
                                <h1><strong>₹80</strong></h1>
                            </div>
                            <div className="col-sm-3">
                                <div className="">
                                    <small><strong>Lorem deterruisset</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Hinc lorem</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Autem molestiae</strong></small>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="">
                                    <small><strong>Lorem deterruisset</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Hinc lorem</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Autem molestiae</strong></small>
                                </div>
                            </div>
                            <div className="col-sm-3 pt-3 text-center">
                                <button className="btn btn-primary"
                                    onClick={() => setPriceSelect("standard")}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-3 w-75 mx-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h4><strong>Express Plan</strong></h4>
                                <h1><strong>₹130</strong></h1>
                            </div>
                            <div className="col-sm-3">
                                <div className="">
                                    <small><strong>Lorem deterruisset</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Hinc lorem</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Autem molestiae</strong></small>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="">
                                    <small><strong>Lorem deterruisset</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Hinc lorem</strong></small>
                                </div>
                                <div className="">
                                    <small><strong>Autem molestiae</strong></small>
                                </div>
                            </div>
                            <div className="col-sm-3 pt-3 text-center">
                                <button className="btn btn-primary"
                                    onClick={() => setPriceSelect("express")}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const handleEmailValidation = (e) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.value.match(mailformat)) {
            setValidEmail(true);
            handleDataChange(e, "email");
        } else {
            console.log(false);
            setValidEmail(false);
        }
    };
    const handleMobileValidation = (e) => {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        handleDataChange(e, "mobile");
        if (re.test(e.target.value)) {
            setValidMobile(true);
        } else {
            setValidMobile(false);
        }
    };
    const handlepasswordMatch = (e) => {
        handleDataChange(e, "verify_password");
        if (e.target.value === register_data.password) {
            setPasswordMatching(true)
            console.log("true");
        } else {
            setPasswordMatching(false);
            console.log("false");
        }
    };
    console.log(is_password_matching, is_valid_email, is_valid_mobile)
    return (
        <div className="container px-3 my-3">
            <div className="d-flex justify-content-end mb-2">
                <button className="btn btn-outline-primary">back</button>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    {price_select === "" && getPlanUI()}
                    { /* <div>
           <small className="text-primary">STEP 1 OF 3</small>
          </div>*/}
                    {price_select !== "" && (
                        <div>
                            <div className="my-2">
                                <h4 className="text-primary">Create Account</h4>
                            </div>
                            <div className="w-75">
                                <div className="mb-2">
                                    <label for="floatingInput">First Name</label>
                                    <input
                                        type="email"
                                        placeholder="Please enter first name"
                                        class="form-control my-2"
                                        id="floating-Input"
                                        onChange={(e) => handleDataChange(e, "first_name")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label for="floatingInput">Middle Name</label>
                                    <input
                                        type="email"
                                        class="form-control my-2"
                                        placeholder="Please Enter middle name"
                                        id="floating-Input"
                                        onChange={(e) => handleDataChange(e, "middle_name")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label for="floatingInput">Last Name</label>
                                    <input
                                        type="email"
                                        class="form-control my-2"
                                        placeholder="Please enter last name"
                                        id="floating-Input"
                                        onChange={(e) => handleDataChange(e, "last_name")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label for="floatingInput">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Please Enter your Email"
                                        class="form-control my-2"
                                        id="floating-Input"
                                        onChange={(e) => handleEmailValidation(e, "email")}
                                    />
                                </div>
                                {!is_valid_email && (
                                    <div className="text-danger">Please enter valid Email</div>
                                )}
                                <div className="mb-2">
                                    <label for="floatingInput">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Please enter password"
                                        class="form-control"
                                        id="floating-Input"
                                        onChange={(e) => handleDataChange(e, "password")}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label for="floatingInput">Verify Password</label>
                                    <input
                                        type="password"
                                        placeholder="Please re-enter password"
                                        class="form-control"
                                        id="floating-Input"
                                        onChange={(e) => handlepasswordMatch(e)}
                                    />
                                    {register_data.password !== "" && register_data.verify_password && (
                                        <div>
                                            {" "}
                                            {is_password_matching ? (
                                                <div className="text-primary">password matching</div>
                                            ) : (
                                                <div className="text-danger">Password is not matching
                                                    {" "}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label for="floatingInput">Mobile</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Please Enter Mobile Number"
                                        id="floating-Input"
                                        onChange={(e) => handleMobileValidation(e)}
                                    />
                                    {!is_valid_mobile && register_data.mobile && (
                                        <div className="text-danger">
                                            Please enter valid mobile number
                                        </div>
                                    )}
                                </div>
                            </div>
                            {price_select !== "" && (<button className="btn btn-primary px-5 rounded-pill"
                                onClick={handleSendVerification}
                                disabled={!is_password_matching || !is_valid_email || !is_valid_mobile}>
                                Send Verification Code
                            </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <OTPModal
                open={true}
                closeModal={closeModal}
                handleSubmit={handleSubmit}
                isVerified={isVerified}
                register_data={register_data}
                handleVerified={handleVerified}
            />
        </div>
    );
}
export default Step1;
