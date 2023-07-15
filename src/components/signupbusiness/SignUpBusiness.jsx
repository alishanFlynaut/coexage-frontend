import React from "react";

export default function SignUpBusiness() {
    return (
<div>
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper wb-page login-bg sign-up-page">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-5 mx-auto">
                <div className="auth-form-light text-left">
                  <div className="auth-form-wrap text-center p-5">
                    <div className="brand-logo">
                      <img src="/images/logo.png"/>
                    </div>
                    <h4><span className="orange">Create Account</span> To Get Started</h4>
                    {/* <!-- <h6 className="font-weight-light">Sign in to continue.</h6> --> */}
                      
                      <div className="mt-5">
                        <a className="btn btn-block btn-md login-business-btn auth-form-btn" href="sign-up.html"><img src="/images/vector.png"/> Sign Up as Business </a>
                      </div>
  
                      <div className="text-center mt-4 font-weight-light hr-lines"><span>OR</span></div>
  
                      <div className="mt-3">
                        <a className="btn btn-block btn-md login-business-btn login-creator-btn auth-form-btn" href="#"><img src="/images/vector-1.png"/> Join as Freelancer </a>
                      </div>
  
                      <div className="text-center mt-5 font-weight-light not-regis"> Already have an account? <a href="dual-sign-up-screen-login.html" className="">Login</a>
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
        <img src="/images/chatbot.png"/>
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