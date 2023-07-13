import React from "react";

export default function Login() {
    return (
        <div>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper wb-page login-bg3 login-page">
                    <div className="bg-overlay"></div>
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-5 mx-auto">
                                <div className="auth-form-light text-left">
                                    <div className="auth-form-wrap text-center p-5">
                                        <div className="brand-logo">
                                            <img src="/images/logo.png" />
                                        </div>
                                        <h4><span className="orange">Hello! </span>Welcome Back.</h4>

                                        <div className="mt-5">
                                            <a className="btn btn-block btn-md btn-google" href="#">
                                                <img src="/images/google-icon.png" />
                                                <span>Login With Google</span>
                                            </a>
                                        </div>

                                        <div className="text-center mt-4 font-weight-light hr-lines"><span>Or Login Via Email ID</span></div>

                                        <form className="pt-5">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email Address</label>
                                                <div className="single-input">
                                                    <img src="/images/email-icon.png" />
                                                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="example@mail.com" />
                                                </div>

                                            </div>

                                            <div className="form-group">
                                                <label for="exampleInputPass">Password</label>
                                                <div className="single-input">
                                                    <img className="pass-icon " src="/images/pass-icon.png" />
                                                    <input type="email" className="form-control form-control-lg" id="exampleInputPass" placeholder="Enter Password" />
                                                    <img className="eye-icon show-pass" src="/images/eye-icon.png" />
                                                </div>

                                            </div>

                                            <div className="form-check form-check-flat form-check-primary forgot-div mt-3">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" /> Remember me <i className="input-helper"></i>
                                                </label>
                                                <a href="forgot-password-step-1.html" className="">Forgot Password?</a>
                                            </div>

                                            <div className="mt-5">
                                                <a className="btn btn-block btn-md login-business-btn auth-form-btn" href="#">Login</a>
                                            </div>
                                        </form>

                                        <div className="divi-line mt-5" style={{border: "1px solid #818181"}}></div>
                                        <div className="text-center mt-5 font-weight-light not-regis"> Not Registered Yet? <a href="#" className="">Create an account</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
            <div className="chat-btn">
                <img src="/images/chatbot.png" />
            </div>

        </div>
    );
}


