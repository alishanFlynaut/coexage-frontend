import React from "react";

export default function Singup() {
    return (
        <div>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper singup-page singup-bg">
                    <div className="bg-overlay"></div>
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-8 mx-auto">
                                <div className="auth-form-light text-center">

                                    <div className="auth-form-wrap text-center p-5">
                                        <div className="brand-logo">
                                            <img src="/images/logo.png" />
                                        </div>
                                        <h4>Create your <span className="orange">free account!</span></h4>

                                        <div className="singup-other-wrap">
                                            <div className="mt-5">
                                                <a className="btn btn-block btn-md btn-google" href="#">
                                                    <img src="/images/google-icon.png" />
                                                    <span>Login With Google</span>
                                                </a>
                                            </div>

                                            <div className="text-center mt-5 font-weight-light hr-lines"><span>Or Login Via Email ID</span></div>
                                        </div>

                                        <form className="pt-3">

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputYourName">Your Name</label>
                                                        <div className="single-input">
                                                            <img className="pass-icon " src="/images/user-circle.png" />
                                                            <input type="text" className="form-control" id="exampleInputYourName" placeholder="Enter Your Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputEmail1">Email Address</label>
                                                        <div className="single-input">
                                                            <img className="pass-icon " src="/images/email-icon.png" />
                                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@mail.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputMobile">Phone Number</label>
                                                        <div className="single-input">
                                                            <img className="pass-icon " src="/images/bx_phone.png" />
                                                            <input type="text" className="form-control" id="exampleInputMobile" placeholder="Enter Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputTimeZone">Time Zone</label>

                                                        <div className="single-input">
                                                            <img className="pass-icon " src="/images/pass-icon.png" />
                                                            <select id="exampleInputTimeZone" className="form-select form-select-lg">
                                                                <option selected>Select Time Zone</option>
                                                                <option value="1">Select Time Zone 1</option>
                                                                <option value="2">Select Time Zone 2</option>
                                                                <option value="3">Select Time Zone 3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputPassword1">Password</label>
                                                        <div className="single-input">
                                                            <img className="pass-icon " src="/images/pass-icon.png" />
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
                                                            <img className="eye-icon show-pass" src="/images/eye-icon.png" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label for="exampleInputConfirmPassword1">Confirm Password</label>
                                                        <div className="single-input">
                                                            <img className="pass-icon " src="/images/pass-icon.png" />
                                                            <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Enter Password Again" />
                                                            <img className="eye-icon show-pass" src="/images/eye-icon.png" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- <div className="col-md-6">
                        <div className="form-check form-check-flat form-check-primary">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"> Remember me </label>
                        </div>
                      </div> --> */}
                                            </div>
                                            <div className="mt-3">
                                                <button type="submit" className="btn btn-block btn-md login-business-btn auth-form-btn me-2">Sign Up</button>
                                            </div>

                                            <div className="divi-line mt-5" style={{ }}></div>
                                            <div className="text-center mt-5 font-weight-light not-regis">Already have an account? <a href="login.html" className="">Log In</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
            {/* <!-- container-scroller --> */}
            {/* <!-- plugins:js --> */}
            <script src="/vendors/js/vendor.bundle.base.js"></script>
            {/* <!-- endinject --> */}
            {/* <!-- Plugin js for this page --> */}
            {/* <!-- End plugin js for this page --> */}
            {/* <!-- inject:js --> */}
            <script src="/js/off-canvas.js"></script>
            <script src="/js/hoverable-collapse.js"></script>
            <script src="/js/misc.js"></script>
            {/* <!-- endinject --> */}


        </div>
    );
}