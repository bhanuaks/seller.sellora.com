import Link from 'next/link'
import React from 'react'


function page() {
    return (
        <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18"> View Product</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);"> Dashboard</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);"> Prodcuts</a>
                </li>
                <li className="breadcrumb-item active"> View Product</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-2">
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      {" "}
                      From Date
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      {" "}
                      To Date
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      {" "}
                      Select Vender
                    </label>
                    <select className="form-select" name="product_status">
                      <option>Ashish</option>
                      <option>Kunal</option>
                      <option>Gaurav </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    <label htmlFor="example-text-input" className="form-label">
                      Status
                    </label>
                    <select className="form-select" name="product_status">
                      <option>All</option>
                      <option>Approved</option>
                      <option>Accept</option>
                      <option>Reject</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    <div className="col-sm-auto">
                      <label className="form-label d-lg-block">&nbsp;</label>
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-10">
                <strong>View List</strong>
              </div>
              <div className="col-lg-2">
                <div className="mb-2">
                  <select className="form-select form-select-md rounded py-0.5 ltr:pl-3 rtl:pr-3 border-gray-50 bg-gray-50/20 dark:border-zinc-600 dark:text-gray-100 dark:bg-zinc-700">
                    <option value="Ascending" selected="">
                      Ascending
                    </option>
                    <option value="Descending">Descending </option>
                  </select>
                </div>
              </div>
              <div className="table-responsive">
                {/* id="example2" */}{" "}
                <table className="table table-bordered table-hover">
                  {" "}
                  <thead>
                    {" "}
                    <tr>
                      {" "}
                      <th width={5}>Sl No.</th> <th width={200}>Vendor</th>{" "}
                      <th width={300}>Product Photo</th> <th>Product Name</th>
                      <th>Category</th> <th>Sub Category</th>{" "}
                      <th>Child Category</th>
                      <th>Brand</th>
                      <th>B2B Price</th>
                      <th>Regular Price</th>
                      <th>Color</th>
                      <th>Style</th>
                      <th width={15}>Status</th>
                      <th width={50}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Zoetic Fashion</td>
                      <td>
                        <div className="product_img">
                          <img src="assets/images/21.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/01.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/02.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/04.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/05.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="products_name">
                          <a href="#">Philips Viva Collection HD4928/01</a>
                        </div>
                      </td>
                      <td>Fashion</td>
                      <td>Men's</td>
                      <td>Watch</td>
                      <td>Gadget Zone</td>
                      <td>
                        <strong>$ 499</strong>
                      </td>
                      <td>...</td>
                      <td>Red</td>
                      <td>Solo3</td>
                      <td>
                        <a href="#" className="approved">
                          Approved
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <i className="far fa-trash-alt" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Zoetic Fashion</td>
                      <td>
                        <div className="product_img">
                          <img src="assets/images/21.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/01.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/02.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/04.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/05.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="products_name">
                          <a href="#">Philips Viva Collection HD4928/01</a>
                        </div>
                      </td>
                      <td>Fashion</td>
                      <td>Men's</td>
                      <td>Watch</td>
                      <td>Gadget Zone</td>
                      <td>
                        <strong>$ 499</strong>
                      </td>
                      <td>...</td>
                      <td>Red</td>
                      <td>Solo3</td>
                      <td>
                        <a href="#" className="acepte">
                          Accept
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <i className="far fa-trash-alt" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Zoetic Fashion</td>
                      <td>
                        <div className="product_img">
                          <img src="assets/images/21.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/01.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/02.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/04.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                        <div className="product_img">
                          <img src="assets/images/05.jpg" />
                          <a href="#">
                            <span className="delete_pro">X</span>
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="products_name">
                          <a href="#">Philips Viva Collection HD4928/01</a>
                        </div>
                      </td>
                      <td>Fashion</td>
                      <td>Men's</td>
                      <td>Watch</td>
                      <td>Gadget Zone</td>
                      <td>
                        <strong>$ 499</strong>
                      </td>
                      <td>...</td>
                      <td>Red</td>
                      <td>Solo3</td>
                      <td>
                        <a href="#" className="danger">
                          Reject
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <i className="far fa-trash-alt" />
                        </a>
                      </td>
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

    )
}

export default page;