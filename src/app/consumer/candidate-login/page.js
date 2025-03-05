import React from 'react'

const page = () => {
  return (
    <div className="rts-register-area rts-section-gap candidate-login-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="discription-content job-apply-heading">
          <h1 className="text-white">Candidate Login</h1>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="registration-wrapper-1 mb--20 mt--10 candidate-login-form">
          <div className="main-register fl-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div className="mrl_20 mb--20 mt--20 candidate-ml">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="custom-form">
                          <form
                            action="#"
                            className="registration-form job-apply-form candidate-login-inner"
                          >
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>Email ID :</label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <input type="email" placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label>Password :</label>
                                </div>
                                <div className="col-lg-9">
                                  <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    defaultValue="password"
                                  />
                                  <i className="toggle-password fa fa-fw fa-eye-slash" />
                                  {/* <input type="password" placeholder=""> */}
                                </div>
                              </div>
                            </div>
                            <div className="input-wrapper job-input-wrapper">
                              <div className="row align-items-center">
                                <div className="col-lg-3">
                                  {" "}
                                  <label className="mob-none">&nbsp;</label>
                                </div>
                                <div className="col-lg-9">
                                  {" "}
                                  <button
                                    href="#"
                                    className="rts-btn btn-primary"
                                  >
                                    {" "}
                                    Login
                                  </button>
                                </div>
                              </div>
                              {/* <button class="rts-btn btn-primary jon-apply-btn mt-5">Submit</button> */}
                            </div>
                          </form>
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
  </div>
</div>

  )
}

export default page