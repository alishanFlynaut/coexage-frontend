import PricingFeatures from "@/components/pricingFeatures/PricingFeatures";
import { Html } from "next/document";
import React from "react";

export default function Workspace() {
  return (
    <>
      {/* <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Workspace | Coexage</title>
            <!-- plugins:css -->
            <link rel="stylesheet" href="/vendors/mdi/css/materialdesignicons.min.css">
            <link rel="stylesheet" href="/vendors/css/vendor.bundle.base.css">
            <!-- endinject -->
            <!-- Plugin css for this page -->
            <!-- End plugin css for this page -->
            <!-- inject:css -->
            <!-- endinject -->
            <!-- Layout styles -->
            <link rel="stylesheet" href="/css/style.css">
            <link rel="stylesheet" href="/css/responsive.css">
            <!-- End layout styles -->
            <link rel="shortcut icon" href="/images/favicon.ico" />
          </head> */}
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
                  <li className="nav-item active">
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
                  <li className="nav-item">
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
                    <span className="count-symbol bg-orange">2</span>
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
        <div className="container-fluid page-body-wrapper pt-70 workspace-page">
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="header-title-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex page-title">
                      <div className="title">
                        <h1>My Brands</h1>
                      </div>
                      <a href="#" className="btn add-brand-btn">
                        <img src="/images/add-new-brand-icon.png" /> Add New
                        Brand
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-wrapper text-center">
              <div className="container">
                <div className="my-brands-wrap">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3 stretch-card grid-margin">
                      <div className="card bg-white card-img-holder">
                        <div className="card-body d-flex flex-row">
                          <a href="#">
                            <div className="brand-img">
                              <img
                                src="/images/brands1.png"
                                className=""
                                alt="brands1"
                              />
                            </div>
                            {/* <!--.brand-img--> */}
                          </a>

                          <div className="brand-text">
                            <a
                              className="brands-toggle"
                              id="brandsDropdown"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src="/images/three-dot.png" alt="image" />
                            </a>

                            <div
                              className="dropdown-menu brands-dropdown"
                              aria-labelledby="brandsDropdown"
                            >
                              <a className="dropdown-item edit-brand-btn" href="#">
                                Edit Brand
                              </a>
                              <a
                                className="dropdown-item delete-brand-btn"
                                href="#"
                              >
                                Delete Brand
                              </a>
                            </div>
                            <a href="my-campaigns.html">
                              <h2 className="card-title mb-2">Flynaut</h2>
                              <h6 className="card-text">
                                Click here to view campaigns
                              </h6>
                            </a>
                          </div>
                          {/* <!--.brand-text--> */}
                        </div>
                        {/* <!--.card-body--> */}
                      </div>
                      {/* <!--.card--> */}
                    </div>

                    <div className="col-md-3 col-sm-3 col-lg-3 stretch-card grid-margin">
                      <div className="card bg-white card-img-holder">
                        <div className="card-body d-flex flex-row">
                          <a href="#">
                            <div className="brand-img">
                              <img
                                src="/images/brands2.png"
                                className=""
                                alt="brands1"
                              />
                            </div>
                            {/* <!--.brand-img--> */}
                          </a>

                          <div className="brand-text">
                            <a
                              className="brands-toggle"
                              id="brandsDropdown"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src="/images/three-dot.png" alt="image" />
                            </a>

                            <div
                              className="dropdown-menu brands-dropdown"
                              aria-labelledby="brandsDropdown"
                            >
                              <a className="dropdown-item edit-brand-btn" href="#">
                                Edit Brand
                              </a>
                              <a
                                className="dropdown-item delete-brand-btn"
                                href="#"
                              >
                                Delete Brand
                              </a>
                            </div>
                            <a href="#">
                              <h2 className="card-title mb-2">Illustrate Art</h2>
                              <h6 className="card-text">
                                Click here to view campaigns
                              </h6>
                            </a>
                          </div>
                          {/* <!--.brand-text--> */}
                        </div>
                        {/* <!--.card-body--> */}
                      </div>
                      {/* <!--.card--> */}
                    </div>

                    <div className="col-md-3 col-sm-3 col-lg-3 stretch-card grid-margin">
                      <div className="card bg-white card-img-holder">
                        <div className="card-body d-flex flex-row">
                          <a href="#">
                            <div className="brand-img">
                              <img
                                src="/images/brands3.png"
                                className=""
                                alt="brands1"
                              />
                            </div>
                            {/* <!--.brand-img--> */}
                          </a>

                          <div className="brand-text">
                            <a
                              className="brands-toggle"
                              id="brandsDropdown"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src="/images/three-dot.png" alt="image" />
                            </a>

                            <div
                              className="dropdown-menu brands-dropdown"
                              aria-labelledby="brandsDropdown"
                            >
                              <a className="dropdown-item edit-brand-btn" href="#">
                                Edit Brand
                              </a>
                              <a
                                className="dropdown-item delete-brand-btn"
                                href="#"
                              >
                                Delete Brand
                              </a>
                            </div>
                            <a href="#">
                              <h2 className="card-title mb-2">Blooming Buds</h2>
                              <h6 className="card-text">
                                Click here to view campaigns
                              </h6>
                            </a>
                          </div>
                          {/* <!--.brand-text--> */}
                        </div>
                        {/* <!--.card-body--> */}
                      </div>
                      {/* <!--.card--> */}
                    </div>

                    <div className="col-md-3 col-sm-3 col-lg-3 stretch-card grid-margin">
                      <div className="card bg-white card-img-holder">
                        <div className="card-body d-flex flex-row">
                          <a href="#">
                            <div className="brand-img">
                              <img
                                src="/images/brands4.png"
                                className=""
                                alt="brands1"
                              />
                            </div>
                            {/* <!--.brand-img--> */}
                          </a>

                          <div className="brand-text">
                            <a
                              className="brands-toggle"
                              id="brandsDropdown"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src="/images/three-dot.png" alt="image" />
                            </a>

                            <div
                              className="dropdown-menu brands-dropdown"
                              aria-labelledby="brandsDropdown"
                            >
                              <a className="dropdown-item edit-brand-btn" href="#">
                                Edit Brand
                              </a>
                              <a
                                className="dropdown-item delete-brand-btn"
                                href="#"
                              >
                                Delete Brand
                              </a>
                            </div>
                            <a href="#">
                              <h2 className="card-title mb-2">Five Walls</h2>
                              <h6 className="card-text">
                                Click here to view campaigns
                              </h6>
                            </a>
                          </div>
                          {/* <!--.brand-text--> */}
                        </div>
                        {/* <!--.card-body--> */}
                      </div>
                      {/* <!--.card--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- content-wrapper ends --> */}
          </div>
          {/* <!-- main-panel ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </>
  );
}
