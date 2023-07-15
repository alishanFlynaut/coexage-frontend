import React from "react";

const RequestReworkRevision2Screen64 = () => {
  return (
    <>
      <div className="container-scroller">
        {/* <!-- partial:partials/_navbar.html --> */}
        <div className="header-nav-wrap fixed-top d-flex flex-row">
          <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="#">
                <img src="/images/logo-white.png" alt="logo" />
              </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-stretch">
              <nav className="header-nav sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="menu-title">Workspace</span>
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Request
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Content Writing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Graphic Design
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="menu-title">My Campaigns</span>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      <span className="menu-title">My Requests</span>
                    </a>
                  </li>
                </ul>
              </nav>

              <ul className="navbar-nav navbar-nav-right">
                {/* <!-- Notifications --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator dropdown-toggle"
                    id="notificationDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <img src="/images/akar-icons_bell.png" alt="image" />
                    <span className="count-symbol bg-orange">2</span>{" "}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <h6 className="p-3 mb-0">Notifications</h6>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="mdi mdi-calendar"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="preview-subject font-weight-normal mb-1">
                          Event today
                        </h6>
                        <p className="text-gray ellipsis mb-0">
                          {" "}
                          Just a reminder that you have an event today{" "}
                        </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="mdi mdi-settings"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="preview-subject font-weight-normal mb-1">
                          Settings
                        </h6>
                        <p className="text-gray ellipsis mb-0">
                          {" "}
                          Update dashboard{" "}
                        </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="mdi mdi-link-variant"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                        <h6 className="preview-subject font-weight-normal mb-1">
                          Launch Admin
                        </h6>
                        <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                  </div>
                </li>
                {/* <!-- Notifications --> */}

                <li className="nav-item nav-logout d-none d-lg-block">
                  <a className="nav-link" href="#">
                    <img
                      src="/images/ant-design_search-outlined.png"
                      alt="image"
                    />
                  </a>
                </li>

                <li className="nav-item nav-profile dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="profileDropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="nav-profile-img">
                      <img src="/images/faces/face1.jpg" alt="image" />
                      {/* <!-- <span className="availability-status online"></span> --> */}
                    </div>
                    <div className="nav-profile-text">
                      <p className="mb-1 text-black">Jane Doe</p>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu navbar-dropdown profile-wrap"
                    aria-labelledby="profileDropdown"
                  >
                    <a href="#" className="dropdown-item nav-profile-wrap">
                      <div className="nav-profile-image">
                        <img src="/images/faces/face1.jpg" alt="profile" />
                        <span className="login-status online"></span>
                        {/* <!--change to offline or busy as needed--> */}
                      </div>
                      <div className="nav-profile-text d-flex flex-column">
                        <span className="font-weight-bold">Jane Doe</span>
                        <span className="text-secondary text-small user-email">
                          jane@gmail.com
                        </span>
                      </div>
                    </a>

                    <div className="dropdown-divider mb1"></div>

                    <a className="dropdown-item" href="#">
                      Profile & Preferences{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      Accounts & Billing{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      Pricing & Features{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      Privacy Policy{" "}
                    </a>

                    <div className="dropdown-divider mb1"></div>
                    <a className="dropdown-item item-logout" href="#">
                      <img
                        src="/images/ri_logout-circle-r-line.png"
                        alt="Logout"
                      />{" "}
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </nav>
        </div>
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper pt-70">
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="header-title-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex page-title">
                      <div className="title">
                        <h1 className="main-title">
                          <span>Request Type:</span>Website Content
                        </h1>
                      </div>
                      <div className="title-right">
                        <a href="#" className="btn request-content-btn">
                          <img
                            src="/images/akar-icons_plus.png"
                            alt="Request Content"
                          />{" "}
                          View All Requests
                        </a>
                        <a href="#" className="btn request-type-btn">
                          <img src="/images/show-arrow-icon.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ========== Drop Nav Start ============--> */}
              <div className="request-drop-menu" style={{display: "none"}}>
                <div className="top-area">
                  <div className="container">
                    <div className="col-set d-flex">
                      <div className="box">
                        <h4>Project Req ID:</h4>
                        <p>#00180</p>
                      </div>

                      <div className="box">
                        <h4>Campaign:</h4>
                        <p>Diwali Campaign</p>
                      </div>

                      <div className="box">
                        <h4>Amount:</h4>
                        <p>$100</p>
                      </div>

                      <div className="box">
                        <h4>Assigned:</h4>
                        <p>James Warner</p>
                      </div>

                      <div className="box">
                        <h4>Due Date:</h4>
                        <p>Jul 6, 2022</p>
                      </div>

                      <div className="box">
                        <h4>Last Updated:</h4>
                        <p>Jul 5, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-area">
                  <div className="container">
                    <div className="col-set d-flex">
                      <div className="left d-flex">
                        <div className="status-text rework">
                          <h5>Project Status:</h5>
                          <p>Rework</p>
                        </div>

                        <div className="inprocess-bar">
                          <div className="inprocess-set d-flex">
                            <div className="bar-box red">
                              <div className="number">1</div>
                              <span>Draft</span>
                            </div>

                            <div className="bar-box red">
                              <div className="number">2</div>
                              <span>Assigned</span>
                            </div>

                            <div className="bar-box yellow">
                              <div className="number">3</div>
                              <span>Title Creation</span>
                            </div>

                            <div className="bar-box yellow">
                              <div className="number">4</div>
                              <span>Title Assigned</span>
                            </div>

                            <div className="bar-box green">
                              <div className="number">5</div>
                              <span>Inprocess</span>
                            </div>

                            <div className="bar-box green">
                              <div className="number">6</div>
                              <span>Submitted</span>
                            </div>

                            <div className="bar-box green">
                              <div className="number">7</div>
                              <span>Submitted</span>
                            </div>

                            <div className="bar-box grey">
                              <div className="number">8</div>
                              <span>Completed</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="right d-flex">
                        <div className="time d-flex">
                          <span className="time-a">2</span>
                          <span className="time-b">4</span>
                        </div>
                        <div className="time-text">
                          Hours Until
                          <br />
                          Image Delivery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ========== Drop Nav End ============--> */}
            </div>

            <div className="content-wrapper">
              <div className="container">
                <div className="mainpage-tabs-area revision-area revision-column-2">
                  <div className="tabs-area">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link active"
                          id="Content-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Content"
                          type="button"
                          role="tab"
                          aria-controls="Content"
                          aria-selected="true"
                        >
                          <img src="/images/tabs-icon1.png" alt="" /> Content
                        </button>
                        <button
                          className="nav-link"
                          id="Activity-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Activity"
                          type="button"
                          role="tab"
                          aria-controls="Activity"
                          aria-selected="false"
                        >
                          <img src="/images/tabs-icon2.png" alt="" /> Activity
                        </button>
                        <button
                          className="nav-link"
                          id="OriginalRequest-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#OriginalRequest"
                          type="button"
                          role="tab"
                          aria-controls="OriginalRequest"
                          aria-selected="false"
                        >
                          <img src="/images/tabs-icon3.png" alt="" /> Original
                          Request
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="Content"
                        role="tabpanel"
                        aria-labelledby="Content-tab"
                        tabIndex="0"
                      >
                        <div className="tabs-text text-left">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="revision-two-col-full mb-4">
                                <div className="revision-two-col-header d-flex justify-content-between align-items-center">
                                  <div className="left-area">
                                    <h1>
                                      Revision{" "}
                                      <img
                                        src="/images/bxs_down-arrow.png"
                                        className="ms-3"
                                        alt=""
                                      />
                                    </h1>
                                    <span className="by-name">
                                      Revision by Jane Doe
                                    </span>
                                    <span className="dt">
                                      1 month ago (Jul 6, 2022)
                                    </span>
                                  </div>

                                  <div className="right-area">
                                    <a
                                      href="#"
                                      className="btn btn-primary me-2 mb-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#ApproveContentModal"
                                    >
                                      <img
                                        src="/images/akar-icons_star-w.png"
                                        className="me-3"
                                        alt=""
                                      />
                                      Approve
                                    </a>

                                    <a
                                      href="#"
                                      className="btn btn-secondary me-2 mb-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#DeleteRevisionModal"
                                    >
                                      <img
                                        src="/images/trash-icon-1.png"
                                        className="me-3"
                                        alt=""
                                      />
                                      Delete This Revision
                                    </a>

                                    <a
                                      href="#"
                                      className="btn btn-secondary me-2 mb-2"
                                    >
                                      <img
                                        src="/images/back-icon.png"
                                        className="me-3"
                                        alt=""
                                      />
                                      Go Back
                                    </a>
                                  </div>
                                </div>

                                <div className="tab-content-area">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="block-red">
                                        <h2>Original Version</h2>
                                        <div className="photo-tab tab-banner">
                                          <img
                                            src="/images/image-3.png"
                                            alt=""
                                          />
                                        </div>
                                        <span>Title</span>
                                        <h3>
                                          Why mobile app development is in high
                                          demand?
                                        </h3>
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Nisl,
                                          aliquet cras nibh praesent arcu quam
                                          egestas. Sed massa dolor egestas odio
                                          eget condimentum. Consectetur massa
                                          lacus, convallis sed faucibus at eu
                                          odio. Scelerisque in est, eu nisl.
                                          Pellentesque amet, accumsan justo vel
                                          elit, bibendum. Habitasse at cursus
                                          duis adipiscing et venenatis, lobortis
                                          hendrerit. Id commodo elementum quis
                                          pulvinar semper. Sed quisque facilisis
                                          eu, quam.
                                        </p>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="block-green">
                                        <h2>Revised Version #2</h2>
                                        <div className="photo-tab tab-banner">
                                          <img
                                            src="/images/image-3.png"
                                            alt=""
                                          />
                                        </div>
                                        <span>Title</span>
                                        <h3>
                                          Why mobile app development is in high
                                          demand?
                                        </h3>
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Nisl,
                                          aliquet cras nibh praesent arcu quam
                                          egestas. Sed massa dolor egestas odio
                                          eget condimentum. Consectetur massa
                                          lacus, convallis sed faucibus at eu
                                          odio. Scelerisque in est, eu nisl.
                                          Pellentesque amet, accumsan justo vel
                                          elit, bibendum. Habitasse at cursus
                                          duis adipiscing et venenatis, lobortis
                                          hendrerit. Id commodo elementum quis
                                          pulvinar semper. Sed quisque facilisis
                                          eu, quam.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="Activity"
                        role="tabpanel"
                        aria-labelledby="Activity-tab"
                        tabIndex="0"
                      >
                        <div className="dates">July 2022</div>
                        <div className="tabs-text text-left bg-white">
                          <div className="contet-box d-flex justify-content-between">
                            <div className="left">
                              <h3>Title Assigned</h3>
                              <h2>
                                Why mobile app development is in high demand?
                              </h2>
                              <p>
                                Congratulations! You have just finalized your
                                blog title. The next step is the writer will
                                start writing the content! Hang tight... You
                                will receive a notification about the new
                                content You can also check Content tab of this
                                project.{" "}
                              </p>
                            </div>
                            <div className="right">July 22, 2022 | 9.04 AM EST</div>
                          </div>

                          <div className="contet-box-footer">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="red-text">
                                Update: Our writer ‘James Warner’ has started
                                working on the content
                              </span>
                              <div className="btn-area">
                                <a
                                  href="#"
                                  className="btn btn-secondary me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#RequestSendModal"
                                >
                                  Request New Title
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-primary me-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ApproveTitleModal"
                                >
                                  Accept Title
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="dates">July 2022</div>
                        <div className="tabs-text text-left bg-white">
                          <div className="listed-box d-flex justify-content-between">
                            <div className="left">
                              <h3>Lorem Ipsum</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Elementum sed tellus turpis
                                quis mauris ipsum.
                                <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                              </p>
                            </div>
                            <div className="right">July 22, 2022 | 9.04 AM EST</div>
                          </div>
                          <div className="listed-box d-flex justify-content-between">
                            <div className="left">
                              <h3>Lorem Ipsum</h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.{" "}
                              </p>
                            </div>
                            <div className="right">July 22, 2022 | 9.04 AM EST</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="OriginalRequest"
                        role="tabpanel"
                        aria-labelledby="OriginalRequest-tab"
                        tabIndex="0"
                      >
                        <div className="tabs-text bg-white">
                          Hang tight... The design is in process. You will
                          receive a notification about your post.
                          <div className="photo-tab">
                            <img src="/images/tabs-image.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--.mainpage-tabs-area--> */}
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- main-panel ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
      {/* <!-- container-scroller --> */}

      <div
        className="modal fade ApproveTitleModal"
        id="ApproveTitleModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Approve Title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h2 className="mb-2">Are you sure you want to approve this title?</h2>
              <p>
                Once approved the titket, you wont be able to request it for
                another title.
              </p>
            </div>
            <div className="modal-footer justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End ApproveTitleModal Modal--> */}

      <div
        className="modal fade ApproveContentModal"
        id="ApproveContentModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Approve Content</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h2 className="mb-2">
                Are you sure you want to approve this content?
              </h2>
              <p>
                Once approved the content, you wont be able to request it for
                another revision.
              </p>
            </div>
            <div className="modal-footer justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End ApproveContentModal Modal--> */}

      <div
        className="modal fade DeleteRevisionModal"
        id="DeleteRevisionModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Revision #1</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h2 className="mb-5">Are you sure you want to delete revision #1?</h2>
              <p>
                All images, text, information associated with this version will
                be permanently deleted.
              </p>
            </div>
            <div className="modal-footer justify-content-end">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Keep
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End DeleteRevisionModal Modal--> */}
    </>
  );
};

export default RequestReworkRevision2Screen64;
