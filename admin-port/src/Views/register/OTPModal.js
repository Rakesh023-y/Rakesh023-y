import React, { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";
import Modal from "react-modal";
import axios from "axios";
const customStyles = {
    content: {
        top: "50%",
        bottom: "auto",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%,-50%)",
    },
};

const OTPModal = ({open, closeModal, isVerified=false, handleSubmit, handleVerified, register_data}) => {
    const [otp, setOtp] = useState("");
    useEffect (() => {
        console.log(register_data);
        if (register_data.mobile) {
             //getOTP()
        }
    }, []);
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };
    const checkOtp = () => {
        axios({
            url: "http://localhost:5000/otp/submit_otp",
            method: "POST",
            data: {"otp": otp }
        })
            .then(res => {
                console.log("test");
            }) 
        handleVerified()

        }

    return (
        <Modal
            isOpen={open}
           // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            {isVerified ? (
                <div>
                    <h4 className="text-dark text-center">Thank You</h4>
                    <div className="text-center text-gray">
                        <small>YOUR NUMBER HAS BEEN VERIFIED</small>
                    </div>
                    <div className="text-center text-gray">
                        <small> {register_data.mobile}</small>
                    </div>
                    <button className="btn btn-primary w-100 my-3" onClick={handleSubmit}> Next </button>
                </div>
            ) : (
                <div>
                    <h3 className=" text-dark text-center my-3">Enter Verification Code</h3>
                    <p className="text-primary text-center">
                        A VERIFICATION CODE HAS BEEN SENT TO {""}
                    </p>
                    <p className="text-dark text-center">{register_data.mobile}</p>
                    <OtpInput
                        inputStyle={{
                            width: "2.4rem",
                            height: "2.4rem",
                            margin: "10px 1rem",
                            fontSize: "1rem",
                            borderRadius: 6,
                            border: "2px solid rgba(0,0,0,0.3)",
                        }}
                        value={otp}
                        onChange={handleChange}
                        numInputs={6}
                    />
                    <button className="btn btn-primary w-100 my-3"
                        onClick={checkOtp}>VERIFY CODE</button>
                    <div
                        className="text-center text-primary"> <small>Resend verification code</small>
                    </div>
                </div>
            )}

        </Modal>
    );
};
export default OTPModal;