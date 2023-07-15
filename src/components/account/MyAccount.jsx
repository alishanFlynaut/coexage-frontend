import React from "react";
import { Html } from "next/document";

const MyAccount = () => {
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
                        <a
                          className="dropdown-item"
                          href="select-project-type-blog-article-step-1.html"
                        >
                          Content Writing
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="select-project-type-website-step-1.html"
                        >
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
                        <p className="text-gray ellipsis mb-0">
                          {" "}
                          New admin wow!{" "}
                        </p>
                      </div>
                    </a>
                    <div className="dropdown-divider"></div>
                    <h6 className="p-3 mb-0 text-center">
                      See all notifications
                    </h6>
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
        <div className="container-fluid page-body-wrapper pt-70 account-billing-page my-account-page">
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="header-title-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex page-title">
                      <div className="title">
                        <h1>
                          Hi! <span style={{ color: '#000' }}>Jane Doe</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-wrapper account-billing-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 account-billing-content">
                    <div className="tabs-wrap">
                      {/* <!-- Tabs navs --> */}
                      <ul
                        className="nav nav-tabs account-billing-tabs"
                        id="ex1"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link active"
                            id="ex1-tab-1"
                            data-bs-toggle="tab"
                            href="#MyAccount-tabs"
                            role="tab"
                            aria-controls="MyAccount-tabs"
                            aria-selected="true"
                          >
                            <img src="/images/bxs_user-account.png" />
                            <span>My Account</span>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="ex1-tab-2"
                            data-bs-toggle="tab"
                            href="#Notifications-tabs"
                            role="tab"
                            aria-controls="Notifications-tabs"
                            aria-selected="false"
                          >
                            <img src="/images/akar-icons_bell-1.png" />
                            <span>Notifications</span>
                          </a>
                        </li>

                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="ex1-tab-2"
                            data-bs-toggle="tab"
                            href="#AccountDetails-tabs"
                            role="tab"
                            aria-controls="AccountDetails-tabs"
                            aria-selected="false"
                          >
                            <img src="/images/ic_outline-account-box.png" />
                            <span>Account Details</span>
                          </a>
                        </li>

                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="ex1-tab-2"
                            data-bs-toggle="tab"
                            href="#UsersTeams-tabs"
                            role="tab"
                            aria-controls="UsersTeams-tabs"
                            aria-selected="false"
                          >
                            <img src="/images/clarity_users-line.png" />
                            <span>Users & Teams</span>
                          </a>
                        </li>
                      </ul>
                      {/* <!-- Tabs navs --> */}

                      {/* <!-- Tabs content --> */}
                      <div
                        className="tab-content account-billing-content myaccount-content"
                        id="ex1-content"
                      >
                        <div
                          className="tab-pane tab-myaccount-pane fade show active"
                          id="MyAccount-tabs"
                          role="tabpanel"
                          aria-labelledby="ex1-tab-1"
                        >
                          <div className="personal-info-wrap info-panel">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="user-image">
                                  <img src="/images/user-img.png" />
                                  <p>Upload Photo</p>

                                </div>
                              </div>
                              <div className="col-md-8 col-md-offset-1">
                                <div className="user-info">
                                  <h2>Your Personal Information</h2>

                                  <div className="user-info-frm">
                                    <form>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label
                                              className="col-form-label"
                                              for="FirstName"
                                            >
                                              Your First Name
                                            </label>
                                            <div className="single-input">
                                              <input
                                                onChange={(e) => setValue(e.target.value)}
                                                type="text"
                                                id="FirstName"
                                                className="form-control"
                                                placeholder="Enter Your First Name"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label
                                              className="col-form-label"
                                              for="LastName"
                                            >
                                              Your Last Name
                                            </label>
                                            <div className="single-input">
                                              <input
                                                onChange={(e) => setValue(e.target.value)}

                                                type="text"
                                                id="LastName"
                                                className="form-control"
                                                placeholder="Enter Your Last Name"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="form-group">
                                            <label
                                              className="col-form-label"
                                              for="email"
                                            >
                                              Your Email ID
                                            </label>
                                            <div className="single-input">
                                              <input
                                                onChange={(e) => setValue(e.target.value)}

                                                type="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="example@mail.com"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label
                                              className="col-form-label"
                                              for="new-pass"
                                            >
                                              New Password
                                            </label>
                                            <div className="single-input">
                                              <input
                                                onChange={(e) => setValue(e.target.value)}

                                                type="password"
                                                id="new-pass"
                                                className="form-control"
                                                placeholder="Enter New Password"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="form-group">
                                            <label
                                              className="col-form-label"
                                              for="con-pass"
                                            >
                                              Confirm Password
                                            </label>
                                            <div className="single-input">
                                              <input
                                                onChange={(e) => setValue(e.target.value)}

                                                type="password"
                                                id="con-pass"
                                                className="form-control"
                                                placeholder="Confirm New Password"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="text-center mt-3">
                                          <input
                                            onChange={(e) => setValue(e.target.value)}

                                            type="submit"
                                            name=""
                                            className="btn btn-primary"
                                            value="Save Changes"
                                          />
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--MyAccount tabs--> */}

                        <div
                          className="tab-pane tab-notifications-pane fade"
                          id="Notifications-tabs"
                          role="tabpanel"
                          aria-labelledby="ex1-tab-2"
                        >
                          <div className="notifications-info-wrap info-panel">
                            <h2>How you get notified</h2>
                            <p>
                              Please note: You can't unsubscribe from important
                              emails about your account, like status and billing
                              updates.
                            </p>
                            <div className="notifications-box d-flex">
                              <img src="/images/notifications-img.png" />
                              <div className="notifi-text">
                                <h2>Email</h2>
                                <p>
                                  Email notifications will be sent to your
                                  inbox.
                                </p>
                              </div>
                              <div className="toggle-btn1 switch-btn">
                                <span className="label-text active">Off</span>
                                <label className="switch">
                                  <input type="checkbox" id="checbox" />
                                  <span className="slider round"></span>
                                </label>
                                <span className="label-text">On</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--Notifications tabs--> */}

                        <div
                          className="tab-pane tab-account-details-pane fade"
                          id="AccountDetails-tabs"
                          role="tabpanel"
                          aria-labelledby="ex1-tab-2"
                        >
                          <div className="account-details-info info-panel">
                            <div className="row">
                              <div className="col-md-1"></div>
                              <div className="col-md-10">
                                <div className="account-details-info-frm">
                                  <form>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="CompanyName"
                                          >
                                            Company Name
                                          </label>
                                          <div className="single-input">
                                            <input
                                              onChange={(e) => setValue(e.target.value)}

                                              type="text"
                                              id="CompanyName"
                                              className="form-control"
                                              placeholder="Flynaut LLC"
                                              value="Flynaut LLC"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="CompanyDomain"
                                          >
                                            Company Domain
                                          </label>
                                          <div className="single-input">
                                            <input
                                              onChange={(e) => setValue(e.target.value)}

                                              type="text"
                                              id="CompanyDomain"
                                              className="form-control"
                                              placeholder="flynaut.com"
                                              value="flynaut.com"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="CompanyAddress"
                                          >
                                            Company Address
                                          </label>
                                          <div className="single-input">
                                            <textarea
                                              onChange={(e) => setValue(e.target.value)}

                                              className="form-control"
                                              id="CompanyAddress"
                                              rows="6"
                                              placeholder="Enter Company Address"
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="City"
                                          >
                                            City
                                          </label>
                                          <div className="single-input">
                                            <input
                                              onChange={(e) => setValue(e.target.value)}

                                              type="text"
                                              id="City"
                                              className="form-control"
                                              placeholder="Enter Your City"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="State"
                                          >
                                            State
                                          </label>
                                          <div className="single-input">
                                            <input
                                              onChange={(e) => setValue(e.target.value)}

                                              type="text"
                                              id="State"
                                              className="form-control"
                                              placeholder="Enter Your State"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="Zip"
                                          >
                                            Zip
                                          </label>
                                          <div className="single-input">
                                            <input
                                              onChange={(e) => setValue(e.target.value)}

                                              type="text"
                                              id="Zip"
                                              className="form-control"
                                              placeholder="Enter Zip Code"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <label
                                            className="col-form-label"
                                            for="Country"
                                          >
                                            Country
                                          </label>
                                          <div className="single-input">
                                            <input
                                              onChange={(e) => setValue(e.target.value)}

                                              type="text"
                                              id="Country"
                                              className="form-control"
                                              placeholder="Enter Your Country"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="text-center mt-3">
                                        <input
                                          onChange={(e) => setValue(e.target.value)}

                                          type="submit"
                                          name=""
                                          className="btn btn-primary"
                                          value="Save Changes"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div className="col-md-1"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!--AccountDetails tabs--> */}

                        <div
                          onChange={(e) => setValue(e.target.value)}

                          className="tab-pane tab-users-teams-pane fade"
                          id="UsersTeams-tabs"
                          role="tabpanel"
                          aria-labelledby="ex1-tab-2"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="users-teams-info">
                                <div className="users-tabs">
                                  <nav>
                                    <div
                                      className="nav nav-tabs"
                                      id="nav-tab"
                                      role="tablist"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="Users-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Users"
                                        type="button"
                                        role="tab"
                                        aria-controls="Users"
                                        aria-selected="true"
                                      >
                                        Users
                                      </button>
                                      <button
                                        className="nav-link"
                                        id="Teams-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Teams"
                                        type="button"
                                        role="tab"
                                        aria-controls="Teams"
                                        aria-selected="false"
                                      >
                                        Teams
                                      </button>
                                    </div>
                                  </nav>
                                  <div
                                    className="tab-content"
                                    id="nav-tabContent"
                                  >
                                    <div
                                      className="tab-pane user-panel fade show active"
                                      id="Users"
                                      role="tabpanel"
                                      aria-labelledby="Users-tab"
                                      tabIndex="0"
                                    >
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="user-search-wrap search-wrap">
                                            <div className="input-group">
                                              <input
                                                onChange={(e) => setValue(e.target.value)}

                                                type="text"
                                                className=""
                                                placeholder="Search user"
                                              />
                                              <div className="m-border"></div>
                                              <div className="input-group-append">
                                                <button
                                                  className="btn"
                                                  type="button"
                                                >
                                                  <img
                                                    src="/images/bx_search-alt-2.png"
                                                    className="search-icon"
                                                    alt="search"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div
                                            className="text-right"
                                            style={{ textAlign: 'right', important: true }}
                                          >
                                            <a
                                              href="#"
                                              className="btn btn-primary create-user-btn"
                                              data-bs-toggle="modal"
                                              data-bs-target="#AddUserModal"
                                            >
                                              Create Users
                                            </a>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="tbl-wrap">
                                            <div className="table-responsive">
                                              <table className="table tbl-body">
                                                <thead>
                                                  <tr>
                                                    <th>Name</th>
                                                    <th>Team</th>
                                                    <th>Access</th>
                                                    <th>Last Active</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <div className="user-details d-flex">
                                                        <div className="user-thum">
                                                          <img src="/images/bxs_user-circle.png" />
                                                        </div>
                                                        <div className="user-name-email">
                                                          <span className="name">
                                                            John Doe
                                                          </span>
                                                          <span className="email">
                                                            john@gmail.com
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td></td>
                                                    <td>Admin</td>
                                                    <td>15 min ago</td>
                                                  </tr>

                                                  <tr>
                                                    <td>
                                                      <div className="user-details d-flex">
                                                        <div className="user-thum">
                                                          <img src="/images/bxs_user-circle.png" />
                                                        </div>
                                                        <div className="user-name-email">
                                                          <span className="name">
                                                            John Doe
                                                          </span>
                                                          <span className="email">
                                                            john@gmail.com
                                                          </span>
                                                        </div>
                                                      </div>
                                                    </td>
                                                    <td></td>
                                                    <td>Admin</td>
                                                    <td>15 min ago</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      className="tab-pane teams-panel fade"
                                      id="Teams"
                                      role="tabpanel"
                                      aria-labelledby="Teams-tab"
                                      tabIndex="0"
                                    >
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="team-search-wrap search-wrap">
                                            <div className="input-group">
                                              <input
                                                type="text"
                                                className=""
                                                placeholder="Search user"
                                              />
                                              <div className="m-border"></div>
                                              <div className="input-group-append">
                                                <button
                                                  className="btn"
                                                  type="button"
                                                >
                                                  <img
                                                    src="/images/bx_search-alt-2.png"
                                                    className="search-icon"
                                                    alt="search"
                                                  />
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div
                                            className="text-right"
                                            style={{ textAlign: 'right', important: true }}
                                          >
                                            <a
                                              href="#"
                                              className="btn btn-primary create-team-btn"
                                              data-bs-toggle="modal"
                                              data-bs-target="#AddTeamsModal"
                                            >
                                              Create Team
                                            </a>
                                          </div>
                                        </div>

                                        <div className="col-md-12">
                                          <div className="tbl-wrap">
                                            <div className="table-responsive">
                                              <table className="table tbl-body">
                                                <thead>
                                                  <tr>
                                                    <th>Team Name</th>
                                                    <th>Users</th>
                                                    <th>Additional Users</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>Team name one</td>
                                                    <td>13</td>
                                                    <td>15 min ago</td>
                                                  </tr>

                                                  <tr>
                                                    <td>Team name two</td>
                                                    <td>2</td>
                                                    <td>15 min ago</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--UsersTeams tabs--> */}
                      </div>
                      {/* <!-- Tabs content --> */}
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
      {/* <!-- container-scroller --> */}

      <div
        className="modal fade AddTeamsModal"
        id="AddTeamsModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Team</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form method="post" action="#" className="AddNewCampaign-frm">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="TeamName" className="col-form-label">
                        Team Name
                      </label>
                      <div className="single-input">
                        <input
                          type="text"
                          className="form-control"
                          id="TeamName"
                          placeholder="Enter Team Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        for="exampleInputYourCampaignOwner"
                        className="col-form-label"
                      >
                        Add Your Team Members
                      </label>
                      <div className="single-input drop-img">
                        <select
                          id="exampleInputYourCampaignOwner"
                          className="form-select form-select-lg"
                        >
                          <option value="">Select Users For Your Team</option>
                          <option value="">User one</option>
                          <option value="">User tow</option>
                          <option value="">User three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Create Team"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- End AddTeamsModal Modal--> */}

      <div className="modal fade AddUserModal" id="AddUserModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Users</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form method="post" action="#" className="AddNewCampaign-frm">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-8">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="UserName" className="col-form-label">
                          User Name
                        </label>
                        <div className="single-input">
                          <input
                            type="text"
                            className="form-control"
                            id="UserName"
                            placeholder="Enter User Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="UserEmail" className="col-form-label">
                          User Email
                        </label>
                        <div className="single-input">
                          <input
                            onChange={(e) => setValue(e.target.value)}

                            type="text"
                            className="form-control"
                            id="UserEmail"
                            placeholder="example@mail.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="UserRole" className="col-form-label">
                          User Role
                        </label>
                        <div className="single-input drop-img">
                          <select
                            id="UserRole"
                            className="form-select form-select-lg"
                          >
                            <option value="">Select User Role</option>
                            <option value="General">General</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="user-image upload-img-wrap">
                      <img src="/images/user-dummy.png" />
                      <p>Upload New Photo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <input
                  onChange={(e) => setValue(e.target.value)}

                  type="submit"
                  className="btn btn-primary"
                  value="Create Team"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
