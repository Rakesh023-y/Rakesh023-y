import React, { useState } from "react";
import Select from "react-select";
const Step2 = ({ handleStep, handleDataChange, register_data }) => {

    const [active_tab, setActiveTab] = useState("COMPANY REGISTRATION");
    const [is_valid_email, setValidEmail] = useState(false);
    const [is_pan_valid, setPanValid] = useState(false);
    const [is_gstn_valid, setGstnValid] = useState(false);

    const tabs = [
        "COMPANY REGISTRATION",
        "COMPANY GENERAL PROFILE",
        "COMPANY ADDRESS",
    ];
    const handleTabChange = (name) => {
        setActiveTab(name);
    };
    const handleNext = (name) => {
        console.log(name);
        if (name === "step") {
            handleStep(3)
        } else {
            setActiveTab(name);
        }
    };
    const handleEmailValidation = (e) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        handleDataChange = (e, "email");
        if (e.target.value.match(mailformat)) {
            setValidEmail(true);
        } else {
            console.log(false);
            setValidEmail(false);
        };
    };
    const handlePanValidation = (e) => {
        var regpanformat = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        handleDataChange(e, "pan");
        if (e.target.value.match(regpanformat)) {
            setPanValid(true);
        } else {
            console.log(false);
            setPanValid(false);
        };
    };
    const handleGSTNValidation = (e) => {
        let regTest = /^([0][1-9]|[1-2][0-9]|[3][0-8])[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/;
        handleDataChange(e, "gstn");
        if (regTest.test(e.target.value)) {
            setGstnValid(true);
        } else {
            setGstnValid(false);
        };
    };
    const options = [
        {
            value: "Company Limited by Shares",
            label: "Company Limited by Shares",
        },
        {
            value: "Company Limited by Guarantee",
            label: "Company Limited by Guarantee",
        },
        {
            value: "Unlimited Companies",
            label: "Unlimited Companies",
        },
        {
            value: "One Person Companies (OPC)",
            label: "One Person Companies (OPC)",
        },
        {
            value: "Private Companies",
            label: "Private Companies",
        },
        {
            value: "Public Companies",
            label: "Public Companies",
        },
    ];

    const getComapanyAddressUI = () => {
        return (
            <div>
                <div className="row mx-3">
                    <div className="col-sm-6">
                        <h4>Company Address</h4>
                        <div>Provide your Registered Company Address</div>
                        <div className="">
                            <label for="floatingInput">Address line1</label>
                            <input
                                type="text"
                                id="floating-Input"
                                class="form-control mt-1"
                                value={register_data.b_address1}
                             onChange={(e)=>handleDataChange(e)}
                            />
                        </div>
                        <div className="">
                            <label for="floatingInput">Address line 2 (Optional)</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.b_address2} />
                        </div>
                        <div className="">
                            <label for="floatingInput">Landmark (Optional)</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.b_landmark} />
                        </div>
                        <div className="">
                            <label for="floatingInput">City / Town</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.b_city} />
                        </div>
                        <div className="">
                            <label for="floatingInput">Select a State</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.b_state} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h4>Billing Address</h4>
                        <div className="check-box">Same as Registered Address</div>
                        <div className="">
                            <label for="floatingInput">Address line 1</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.c_address2} />
                        </div>
                        <div className="">
                            <label for="floatingInput">Address line 2 (Optional)</label>
                            <input
                                type="text"
                                class="form-control"
                                id="floating-Input mt-1"
                                value={register_data.c_address2} />
                        </div>
                        <div className="">
                            <label for="floatingInput">Landmark (Optional)</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.c_landmark} />
                        </div>
                        <div className="">
                            <label for="floatingInput"> City / Town</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.c_city} />
                        </div>
                        <div className="">
                            <label for="floatingInput">Select a State</label>
                            <input
                                type="text"
                                class="form-control mt-1"
                                id="floating-Input"
                                value={register_data.c_state} />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary"
                        onClick={() => handleNext("COMPANY GENERAL PROFILE")}
                    >Next</button>
                </div>
            </div>
        )
    };
    const getGeneralProfileUI = () => {
        return (
            <div>
                <h4>Company General Profile</h4>
                <div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mb-2">
                                <label for="floatingInput">Company Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floating-Input"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="floatingInput">upload a company logo </label>
                            <input type="file" class="form-control" id="floating-Input" />
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-6">
                            <label>Select Categories Company Is Present In</label>
                        <Select isMulti options ={options} onChange={() => {}} />
                        </div>
                        <div className="col-sm-6">
                            <label for="floatingInput">Company Present Across India</label>
                            <div className="mt-1">
                                <input type="radio" name="type" /> Yes
                                <input type="radio" name="type" /> No
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-6">
                            <label for="floatingInput">Annual Sales of the Company</label>
                            <input
                                type="text" id="floating-Input" class="form-control" />
                        </div>
                        <div className="col-sm-6">
                            <label for="floatingInput">Employee Number</label>
                            <input
                                type="text" class="form-control" id="floating-Input" />
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-6">
                            <label for="floatingInput">Please provide Company website Url</label>
                            <input
                                type="text" class="form-control mt-1" id="floating-Input" />
                        </div>
                        <div className="col-sm-6">
                            <label for="floatingInput">Facebook Page</label>
                            <input
                                type="text" class="form-control mt-1" id="floating-Input" />
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-sm-6">
                            <label for="floatingInput">Instagram page</label>
                            <input
                                type="floatingInput" class="form-control mt-1" id="floating-Input" />
                        </div>
                        <div className="col-sm-6">
                            <label for="floatingInput">Brief description of the Company</label>
                            <input
                                type="text" class="form-control mt-1" id="floating-Input" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary my-3"
                        onClick={() => handleNext("step")}>Next</button>
                </div>
            </div>
        );
    };

    const getCompanyRegistrationUI = () => {
        return (
            <div>
                <h4 className="text-grey">Company Registration</h4>
                <div className="mb-2">
                    <label for="floatingInput">Company Name</label>
                    <input
                        type="email" class="form-control" id="floating-Input"
                        placeholder="Please enter Company name" />
                </div>
                <div className="mb-2">
                    <label for="floatingInput">Email</label>
                    <input
                        type="email" class="form-control mt-1" id="floating-Input"
                        onChange={(e) => handleEmailValidation(e)} />
                </div>
                <div className="">
                    <label for="floatingInput">Company Type</label>
                     <select
                        class="form-control mt-1"
                        onChange={(e) => handleDataChange(e, "company_type")}>
                         <option value="">select</option>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
              </select>
                </div>
                <div className="mb-2">
                    <label for="floatingInput">CIN Number (Optional)</label>
                    <input
                        type="email" class="form-control mt-1" id="floating-Input" />
                </div>
                <div className="mb-2 mt-1">
                    <label for="floatingInput">MSME</label>
                    <div className="">
                        <input
                            type="radio" />Yes
                        <input type="radio" className="ms-3" /> No
                    </div>
                </div>
                <div className="mb-2">
                    <label for="floatingInput">PAN Number</label>
                    <input
                        type="email" class='form-control mt-1' id="floating-Input"
                        onChange={(e) => handlePanValidation(e)} />
                </div>
                <div className="mb-2">
                    <label for="floatingInput">GST Number</label>
                    <input
                        type="text" class="form-control" id="floating-Input"
                        onChange={(e) => handleGSTNValidation(e)} />
                </div>
                <div className="">
                    <button className="btn btn-primary"
                        onClick={() => handleNext("COMPANY ADDRESS")}
                        disabled={!is_pan_valid || is_gstn_valid || is_valid_email}
                        >Next</button>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary my-3">Back</button>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="tab-container d-flex ">
                                {tabs.map((d, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={d === active_tab ? "tab_active" : "tab"}
                                            onClick={() => handleTabChange(d)}
                                        >
                                            {d}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {active_tab === "COMPANY REGISTRATION" && getCompanyRegistrationUI()}
                        {active_tab === "COMPANY GENERAL PROFILE" && getGeneralProfileUI()}
                        {active_tab === "COMPANY ADDRESS" && getComapanyAddressUI()}

                    </div>
                </div>
            </div>
        </div>


    );
};
export default Step2;