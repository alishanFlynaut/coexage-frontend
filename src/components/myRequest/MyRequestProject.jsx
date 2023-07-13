import React from "react";

const MyRequest = () => {
  return (
    <>
      <div className="container-scroller">
        {/* <!-- partial:partials/_navbar.html --> */}
        <div className="header-nav-wrap fixed-top d-flex flex-row">
          <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="#">
                <img src="/images/logo-white.png" alt="logo"/>
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
        <div className="container-fluid page-body-wrapper pt-70 request-page">
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="header-title-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex page-title">
                      <div className="title">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#">Flynaut Brand</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">Campaigns</a>
                          </li>
                          <li className="breadcrumb-item active">Requests</li>
                        </ol>
                      </div>
                      <div className="title-right">
                        <a
                          href="#"
                          className="btn request-content-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#ReqProjectModal"
                        >
                          <img
                            src="/images/akar-icons_plus.png"
                            alt="Request Content"
                          />{" "}
                          Request Content
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-filter-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group showing-wrap">
                      <label for="exampleInputShowing">Showing</label>
                      <div className="single-input">
                        <select
                          id="exampleInputShowing"
                          className="form-select form-select-lg"
                        >
                          <option selected="">All Requests</option>
                          <option value="Content Writing">
                            Content Writing
                          </option>
                          <option value="Graphic Design">Graphic Design</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--.Search By Filter--> */}

            <div className="content-wrapper text-center">
              <div className="container">
                <div className="projects-count-wrap">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="projects-box">
                        <h4 className="project-count">5</h4>
                        <span className="project-title">TOTAL PROJECTS</span>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="projects-box">
                        <h4 className="project-count">3</h4>
                        <span className="project-title">
                          COMPLETED PROJECTS
                        </span>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="projects-box">
                        <h4 className="project-count">2</h4>
                        <span className="project-title">ASSIGNED PROJECTS</span>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="projects-box">
                        <h4 className="project-count">2</h4>
                        <span className="project-title">
                          UNASSIGNED PROJECTS
                        </span>
                        <a
                          href="#"
                          className="notification-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#ReqProjectModal"
                        >
                          <img src="/images/bell-icon.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="projects-box">
                        <h4 className="project-count">2</h4>
                        <span className="project-title">
                          PROJECTS IN PROCESS
                        </span>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="projects-box">
                        <h4 className="project-count">1</h4>
                        <span className="project-title">REQUEST REVISIONS</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--.projects-count-wrap--> */}

                <div className="request-tbl-wrap">
                  <div className="table-responsive">
                    <table className="table request-tbl">
                      <thead>
                        <tr>
                          <th>Req ID </th>
                          <th>Title</th>
                          <th>Status</th>
                          <th>Assigned</th>
                          <th>Due Date</th>
                          <th>Last Updated</th>
                          <th>Review</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#00178</td>
                          <td className="edit">
                            <a href="#">
                              Blog / Article - Word Limit: 100 words{" "}
                              <img src="/images/title-edit-icon.png" />
                            </a>
                          </td>
                          <td className="inprocess">
                            <img src="/images/inprocess-icon.png" /> Inprocess
                          </td>
                          <td>James Warner</td>
                          <td>Jul 6, 2022</td>
                          <td>Jul 7, 2022</td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>#00179</td>
                          <td className="edit">
                            <a href="#">
                              Social Media Post - Instagram{" "}
                              <img src="/images/title-edit-icon.png" />
                            </a>
                          </td>
                          <td className="inprocess">
                            <img src="/images/inprocess-icon.png" /> Inprocess
                          </td>
                          <td>Cameron D</td>
                          <td>Jul 6, 2022</td>
                          <td>Jul 7, 2022</td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>#00180</td>
                          <td className="edit">
                            <a href="#">
                              Product Desc - Word Limit: 500 words{" "}
                              <img src="/images/title-edit-icon.png" />
                            </a>
                          </td>
                          <td className="rework">
                            <img src="/images/rework-icon.png" /> Rework
                          </td>
                          <td>Sarah Hayland</td>
                          <td>Jul 6, 2022</td>
                          <td>Jul 7, 2022</td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>#00181</td>
                          <td className="edit">
                            <a href="#">
                              Product Desc - Word Limit: 500 words{" "}
                              <img src="/images/title-edit-icon.png" />
                            </a>
                          </td>
                          <td className="tit-creation">
                            <img src="/images/tit-creation-icon.png" /> Title
                            Creation
                          </td>
                          <td>Trevour Patterson</td>
                          <td>Jul 6, 2022</td>
                          <td>Jul 7, 2022</td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>#00182</td>
                          <td className="edit">
                            <a href="#">
                              Whitepaper- Word Limit: 500 words{" "}
                              <img src="/images/title-edit-icon.png" />
                            </a>
                          </td>
                          <td className="pro-assigned">
                            <img src="/images/pro-assigned-icon.png" /> Project
                            Assigned
                          </td>
                          <td>Cameron D</td>
                          <td>Jul 6, 2022</td>
                          <td>Jul 7, 2022</td>
                          <td></td>
                        </tr>

                        <tr>
                          <td>#00183</td>
                          <td className="edit">
                            <a href="#">
                              Blog / Article - Word Limit: 500 words{" "}
                              <img src="/images/title-edit-icon.png" />
                            </a>
                          </td>
                          <td className="completed">
                            <img src="/images/completed-icon.png" /> Completed
                          </td>
                          <td>Cameron D</td>
                          <td>Jul 6, 2022</td>
                          <td>Jul 7, 2022</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!--request-tbl-wrap--> */}
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
        className="modal fade ReqProjectModal"
        id="ReqProjectModal"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title">Reminder : Unassigned Project </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  It appears that the following projects have not been assigned.
                  Select the projects and send request to the admin
                </p>
                <div className="form-check form-check-flat form-check-primary mt-3">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked
                    />{" "}
                    Blog / Article - Word Limit: 100 words
                  </label>
                </div>
                <div className="form-check form-check-flat form-check-primary mt-3">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />{" "}
                    Whitepaper- Word Limit: 500 words
                  </label>
                </div>

                <div className="form-group">
                  <label for="exampleTextarea1">
                    Add a note your administrator (optional)
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    rows="7"
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  className="btn btn-primary"
                  name="submit"
                  value="Send Request"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- End ReqProjectModal Modal--> */}
    </>
  );
};

export default MyRequest;
