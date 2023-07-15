import React from "react";

export default function ResetPassword() {
  return (
    <div>

      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper wb-page login-bg forgot-password-page">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-5 mx-auto">
                <div className="auth-form-light text-left">
                  <div className="auth-form-wrap text-center p-5">
                    <div className="brand-logo">
                      <img src="/images/logo.png" />
                    </div>
                    <h4><span className="orange">Reset</span> your password</h4>
                    <h6 className="font-weight-light text-notes">Please enter the email address you would like your password reset information sent to. </h6>


                    <form className="pt-3">
                      <div className="form-group">
                        <label>Enter Email Address</label>
                        <div className="single-input">
                          <img src="/images/email-icon.png" />
                          <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="example@mail.com" />
                        </div>

                      </div>

                      <div className="mt-3">
                        <a className="btn btn-block btn-md login-business-btn auth-form-btn" href="forgot-password-step-2.html">Reset Your Password</a>
                      </div>
                    </form>

                    <div className="text-center mt-3 font-weight-light not-regis"> <a href="dual-sign-up-screen-login.html" className="">Go Back to Login</a>
                    </div>

                    <div className="text-center mt-5 font-weight-light not-regis"> Coexage. All Rights Reserved </div>

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
        <img src="../images/chatbot.png" />
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