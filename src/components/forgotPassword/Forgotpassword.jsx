
import React from "react";

export default function Forgotpassword(){
  return(
    <div>

    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper wb-page login-bg forgot-password-page">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-5 mx-auto">
              <div className="auth-form-light text-left">
                <div className="auth-form-wrap text-center p-5">
                  <div className="brand-logo">
                    <img src="/images/logo.png"/>
                  </div>
                  <h4><span className="orange">Email</span> is on your way!</h4>
                  <div className="mt-5 mb-5">
                    <img src="/images/email-icon-1.png"/>
                  </div>
                  
                  <h6 className="font-weight-light text-notes text-mail">We have sent you the password reset information link on <b>abc@gmail.com</b></h6>
                  <h6 className="font-weight-light text-notes text-steps">Follow the steps given in the email and reset your password. After
reseting login to your account again with the new password. Check the 
spam folder if not received in the inbox.</h6>


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
    {/* <!-- endinject --></body> */}

    </div>
  );
}