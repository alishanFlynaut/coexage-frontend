import React from 'react';

const RequestCompleted = () => {
  return (
    <>
      <div className="container-scroller">
		{/* <!-- partial:partials/_navbar.html --> */}
		<div className="header-nav-wrap fixed-top d-flex flex-row">
			<nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row container">
				<div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
					<a className="navbar-brand brand-logo" href="#"><img src="images/logo-white.png"
							alt="logo" /></a>
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
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
									aria-expanded="false">
									Request
								</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Content Writing</a></li>
									<li><a className="dropdown-item" href="#">Graphic Design</a></li>
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
							<a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
								data-bs-toggle="dropdown">
								<img src="images/akar-icons_bell.png" alt="image" />
								<span className="count-symbol bg-orange">2</span> </a>
							<div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
								aria-labelledby="notificationDropdown">
								<h6 className="p-3 mb-0">Notifications</h6>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item preview-item">
									<div className="preview-thumbnail">
										<div className="preview-icon bg-success">
											<i className="mdi mdi-calendar"></i>
										</div>
									</div>
									<div
										className="preview-item-content d-flex align-items-start flex-column justify-content-center">
										<h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
										<p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today
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
									<div
										className="preview-item-content d-flex align-items-start flex-column justify-content-center">
										<h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
										<p className="text-gray ellipsis mb-0"> Update dashboard </p>
									</div>
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item preview-item">
									<div className="preview-thumbnail">
										<div className="preview-icon bg-info">
											<i className="mdi mdi-link-variant"></i>
										</div>
									</div>
									<div
										className="preview-item-content d-flex align-items-start flex-column justify-content-center">
										<h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
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
								<img src="images/ant-design_search-outlined.png" alt="image" />
							</a>
						</li>

						<li className="nav-item nav-profile dropdown">
							<a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown"
								aria-expanded="false">
								<div className="nav-profile-img">
									<img src="images/faces/face1.jpg" alt="image" />
									{/* <!-- <span className="availability-status online"></span> --> */}
								</div>
								<div className="nav-profile-text">
									<p className="mb-1 text-black">Jane Doe</p>
								</div>
							</a>
							<div className="dropdown-menu navbar-dropdown profile-wrap" aria-labelledby="profileDropdown">
								<a href="#" className="dropdown-item nav-profile-wrap">
									<div className="nav-profile-image">
										<img src="images/faces/face1.jpg" alt="profile" />
										<span className="login-status online"></span>
										{/* <!--change to offline or busy as needed--> */}
									</div>
									<div className="nav-profile-text d-flex flex-column">
										<span className="font-weight-bold">Jane Doe</span>
										<span className="text-secondary text-small user-email">jane@gmail.com</span>
									</div>
								</a>

								<div className="dropdown-divider mb1"></div>

								<a className="dropdown-item" href="#">Profile & Preferences </a>
								<a className="dropdown-item" href="#">Accounts & Billing </a>
								<a className="dropdown-item" href="#">Pricing & Features </a>
								<a className="dropdown-item" href="#">Privacy Policy </a>

								<div className="dropdown-divider mb1"></div>
								<a className="dropdown-item item-logout" href="#">
                                    <img src="images/ri_logout-circle-r-line.png" alt="Logout" /> Logout</a>


							</div>
						</li>

					</ul>
					<button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
						data-toggle="offcanvas">
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
										<h1 className="main-title"><span>Request Type:</span> Blog / Article </h1>
									</div>
									<div className="title-right">
										<a href="#" className="btn request-content-btn">
                                            <img src="images/akar-icons_plus.png" alt="Request Content" /> View All
											Requests</a>
										<a href="#" className="btn request-type-btn">
                                            <img src="images/show-arrow-icon.png" alt="image" /></a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- ========== Drop Nav Start ============--> */}
					<div className="request-drop-menu" style={{display:'none'}}>
						<div className="top-area">
							<div className="container">
								<div className="col-set d-flex">
									<div className="box">
										<h4>Project Req ID:</h4>
										<p>#00178</p>
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

										<div className="status-text status-completed">
											<img src="images/pro-completed.png" />
											<h5>Project Status:</h5>
											<p>Inprocess</p>
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

												<div className="bar-box d-green">
													<div className="number">7</div>
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
										<div className="time-text">Hours Until<br/>
											Image Delivery</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					{/* <!-- ========== Drop Nav End ============--> */}

				</div>



				<div className="content-wrapper">
					<div className="container">

						<div className="mainpage-tabs-area">

							<div className="tabs-area">
								<nav>
									<div className="nav nav-tabs" id="nav-tab" role="tablist">
										<button className="nav-link active" id="Content-tab" data-bs-toggle="tab"
											data-bs-target="#Content" type="button" role="tab" aria-controls="Content"
											aria-selected="true"><img src="images/tabs-icon1.png" alt="iamge" />
											Content</button>
										<button className="nav-link" id="Activity-tab" data-bs-toggle="tab"
											data-bs-target="#Activity" type="button" role="tab" aria-controls="Activity"
											aria-selected="false"><img src="images/tabs-icon2.png" alt="image" />
											Activity</button>
										<button className="nav-link" id="OriginalRequest-tab" data-bs-toggle="tab"
											data-bs-target="#OriginalRequest" type="button" role="tab"
											aria-controls="OriginalRequest" aria-selected="false">
                                                <imgs rc="images/tabs-icon3.png" alt="image" /> Original Request</button>
									</div>
								</nav>
								<div className="tab-content" id="nav-tabContent">
									<div className="tab-pane fade show active" id="Content" role="tabpanel"
										aria-labelledby="Content-tab" tabindex="0">
										<div className="tabs-text">
											<div className="top-btn-area">
												<a href="#" className="btn btn-primary me-2 mb-3 tab-download-btn">
													<img src="images/akar-icons_download.png" alt='image' />Download Content
												</a>
												<a href="#" className="btn btn-secondary me-2 mb-3 tab-download-btn">
													<img src="images/akar-icons_star.png"  alt='image'/>Order From Same Writer
												</a>
											</div>
											<div className="photo-tab tab-banner">
												<img src="images/image3.jpg" alt="image" />
											</div>

											<div className="tab-content-area">
												<span>Title</span>
												<h2>Why mobile app development is in high demand?</h2>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl,
													aliquet cras nibh praesent arcu quam egestas. Sed massa dolor
													egestas odio eget condimentum. Consectetur massa lacus, convallis
													sed faucibus at eu odio. Scelerisque in est, eu nisl. Pellentesque
													amet, accumsan justo vel elit, bibendum. Habitasse at cursus duis
													adipiscing et venenatis, lobortis hendrerit. Id commodo elementum
													quis pulvinar semper. Sed quisque facilisis eu, quam.</p>
											</div>
										</div>
									</div>

									<div className="tab-pane fade" id="Activity" role="tabpanel"
										aria-labelledby="Activity-tab" tabindex="0">
										<div className="dates">July 2022</div>
										<div className="tabs-text text-left">
											<div className="contet-box d-flex justify-content-between">
												<div className="left">
													<h3>Title Assigned</h3>
													<h2>Why mobile app development is in high demand?</h2>
													<p>Congratulations! You have just finalized your blog title. The
														next step is the writer will start writing the content!
														Hang tight... You will receive a notification about the new
														content You can also check Content tab of this project. </p>

													<span className="green-text">Update: Our writer ‘James Warner’ has
														started working on the content</span>

												</div>
												<div className="right">July 22, 2022 | 9.04 AM EST</div>
											</div>
										</div>

										<div className="dates">July 2022</div>
										<div className="tabs-text text-left">
											<div className="listed-box d-flex justify-content-between">
												<div className="left">
													<h3>Lorem Ipsum</h3>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
														Elementum sed tellus turpis quis mauris ipsum.<br/>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
												</div>
												<div className="right">July 22, 2022 | 9.04 AM EST</div>
											</div>
											<div className="listed-box d-flex justify-content-between">
												<div className="left">
													<h3>Lorem Ipsum</h3>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
												</div>
												<div className="right">July 22, 2022 | 9.04 AM EST</div>
											</div>
										</div>

									</div>

									<div className="tab-pane fade" id="OriginalRequest" role="tabpanel"
										aria-labelledby="OriginalRequest-tab" tabindex="0">

										<div className="substabs-boxs">
											<span className="top-texts">Below you will find the detailed information about
												the project you requested.</span>
											<nav>
												<div className="nav nav-tabs" id="nav-tab" role="tablist">
													<button className="nav-link active" id="Project-tab"
														data-bs-toggle="tab" data-bs-target="#Project" type="button"
														role="tab" aria-controls="Project" aria-selected="true">Project
														Brief</button>
													<button className="nav-link" id="Company-tab" data-bs-toggle="tab"
														data-bs-target="#Company" type="button" role="tab"
														aria-controls="Company" aria-selected="false">Company / Brand
														Info</button>
													<button className="nav-link" id="Campaign-tab" data-bs-toggle="tab"
														data-bs-target="#Campaign" type="button" role="tab"
														aria-controls="Campaign" aria-selected="false">Campaign
														Info</button>
												</div>
											</nav>
											<div className="tab-content" id="nav-tabContent">
												<div className="tab-pane fade show active" id="Project" role="tabpanel"
													aria-labelledby="Project-tab" tabindex="0">

													{/* <!--====== Start Here ============--> */}
													<div className="sub-tab-text">
														<div className="box-info">
															<h6 className="title">Title</h6>
															<p>World in 2050 and Artifical Intelligence</p>
														</div>

														<div className="box-info">
															<h6 className="title">Word Count</h6>
															<p>500 words</p>
														</div>

														<div className="box-info">
															<h6 className="title">Payment</h6>
															<p>$1000</p>
														</div>

														<div className="box-info">
															<h6 className="title">Keywords</h6>
															<a href="#" className="btn-tab">Dolar Sit</a>
															<a href="#" className="btn-tab">Lorem Ipsum</a>
														</div>

														<div className="box-info">
															<h6 className="title">Description</h6>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
																Viverra tempor cras et sed rhoncus, risus.</p>
														</div>
													</div>
													{/* <!--====== End Here ============--> */}

												</div>


												<div className="tab-pane fade" id="Company" role="tabpanel"
													aria-labelledby="Company-tab" tabindex="0">

													{/* <!--====== Start Here ============--> */}
													<div className="sub-tab-text">
														<div className="box-info">
															<div className="sets mr-100">
																<h6 className="title">Company Name</h6>
																<p>World Web Industries</p>
															</div>
															<div className="sets">
																<h6 className="title">Company Industry Type</h6>
																<p>IT Company</p>
															</div>
														</div>

														<div className="box-info">
															<h6 className="title">Company Description</h6>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
																Id nulla feugiat lectus fermentum, tincidunt. Tellus et
																hendrerit adipiscing elementum maecenas mauris feugiat
																elit. In turpis augue phasellus lectus amet id donec
																aliquet massa. Pharetra in tellus quis quam odio
																ultrices eget. Rutrum mollis augue elementum venenatis.
																Suspendisse maecenas egestas vitae viverra rhoncus.
																Magna amet euismod ut mauris dictumst. Tellus fermentum
																lorem odio suspendisse sit enim in ornare a. Semper
																tempus nibh cursus sit ultrices.</p>
														</div>

														<div className="box-info">
															<h6 className="title">Keywords</h6>
															<a href="#" className="btn-tab">Dolar Sit</a>
															<a href="#" className="btn-tab">Lorem Ipsum</a>
														</div>

														<div className="box-info">
															<h6 className="title">Social Media Links</h6>
															<a href="#"
																className="links">www.facebook.com/company-name</a>
                                                                <br/>
															<a href="#" className="links">www.instagram.com/company-name</a>
														</div>

														<div className="box-info">
															<h6 className="title">Competitor Links</h6>
															<a href="#" className="links">www.random-link.com</a>
														</div>

														<div className="box-info">
															<h6 className="title">Target Audience</h6>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
																Congue in gravida condimentum tincidunt a, euismod
																posuere et bibendum. Netus lorem lectus donec velit
																consectetur ornare lacinia est, convallis. Pretium augue
																aliquam arcu scelerisque sit ut est urna.</p>
														</div>

														<div className="box-info">
															<div className="sets mr-100">
																<h6 className="title">Audience Type</h6>
																<p>General Audience</p>
															</div>
															<div className="sets">
																<h6 className="title">Brand Tone</h6>
																<p>Very Casual</p>
															</div>
														</div>

														<div className="box-info">
															<h6 className="title">Supporting Documents</h6>
															<div className="pdt-box d-flex">
																<img src="images/pdf-file-icon.png" alt=""
																	className="pdt-img" />
																<div className="pdf-text">
																	<strong>Getting-Started.pdf</strong>
																	64 KB
																</div>
															</div>
														</div>

													</div>
													{/* <!--====== End Here ============--> */}

												</div>


												<div className="tab-pane fade" id="Campaign" role="tabpanel"
													aria-labelledby="Campaign-tab" tabindex="0">

													{/* <!--====== Start Here ============--> */}
													<div className="sub-tab-text">

														<div className="box-info">
															<h6 className="title">Campaign Name</h6>
															<p>Future Technologies</p>
														</div>

														<div className="box-info">
															<h6 className="title">Campaign Owner</h6>
															<p>James Bobek</p>
														</div>

														<div className="box-info">
															<div className="sets mr-100">
																<h6 className="title">Start Date</h6>
																<p>July 25, 2022</p>
															</div>
															<div className="sets">
																<h6 className="title">End Date</h6>
																<p>July 30, 2022</p>
															</div>
														</div>

														<div className="box-info">
															<h6 className="title">Target Audience</h6>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
																Congue in gravida condimentum tincidunt a, euismod
																posuere et bibendum. Netus lorem lectus donec velit
																consectetur ornare lacinia est, convallis. Pretium augue
																aliquam arcu scelerisque sit ut est urna.</p>
														</div>

														<div className="box-info">
															<h6 className="title">Campaign Budget</h6>
															<p>$1000</p>
														</div>

														<div className="box-info">
															<h6 className="title">Notes</h6>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
																Congue in gravida condimentum tincidunt a, euismod
																posuere et bibendum. Netus lorem lectus donec velit
																consectetur ornare lacinia est, convallis. Pretium augue
																aliquam arcu scelerisque sit ut est urna.</p>
														</div>


													</div>
													{/* <!--====== End Here ============--> */}

												</div>
											</div>
										</div>


									</div>

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

	<div className="modal fade ReqProjectModal" id="ReqProjectModal" tabindex="-1">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<form>
					<div className="modal-header">
						<h5 className="modal-title">Reminder : Unassigned Project </h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">

						<p>It appears that the following projects have not been assigned. Select the projects and send
							request to the admin</p>
						<div className="form-check form-check-flat form-check-primary mt-3">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input" checked /> Blog / Article - Word Limit:
								100 words
							</label>
						</div>
						<div className="form-check form-check-flat form-check-primary mt-3">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input" /> Whitepaper- Word Limit: 500 words
							</label>
						</div>

						<div className="form-group">
							<label for="exampleTextarea1">Add a note your administrator (optional)</label>
							<textarea className="form-control" id="exampleTextarea1" rows="7"></textarea>
						</div>

					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
						<input type="submit" className="btn btn-primary" name="submit" value="Send Request" />
					</div>
				</form>
			</div>
		</div>
	</div>
    {/* <!-- End ReqProjectModal Modal--> */}

    </>
  );
}

export default RequestCompleted;
