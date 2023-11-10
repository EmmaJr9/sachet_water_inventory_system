import { Helmet } from "react-helmet";


export default function Admin() {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./src/assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="./src/assets/img/favicon.png" />
        <title>Admin</title>
        <link rel="stylesheet" type="text/css" href="./src/styles.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="./src/assets/css/css.css"
        />
        <link rel="stylesheet" type="text/css" href="./src/admin.css" />
        <link href="./src/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="./src/assets/css/nucleo-svg.css" rel="stylesheet" />
        <Helmet>
          <script
            src="./src/assets/css/42d5adcbca.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>
        <link
          href="./src/assets/fontawesome-free-6.4.0-web/css/all.css"
          rel="stylesheet"
        />
        <link
          id="pagestyle"
          href="./src/assets/css/material-dashboard.min.css"
          rel="stylesheet"
        />
        <Helmet>
          <script async defer src="./src/assets/js/buttons.js"></script>
          <script type="module" src="./src/main.js" defer></script>
          <script type="module" src="./src/access.js" defer></script>
          <script src="./src/assets/js/material-dashboard.min.js"></script>
          <script type="module" src="./src/js/admin1.js" defer></script>
        </Helmet>
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-0 fixed-start ms-0 "
          id="sidenav-main"
          style={{
            padding: "0",
            margin: "0",
            backgroundColor: "#1875be",
            borderRadius: "0%",
          }}
        >
          <div className="sidenav-header">
            <h3
              style={{
                color: "#fff",
                padding: 20,
                textAlign: "center",
                fontSize: "x-large",
                marginTop: "10px",
              }}
            >
              Sachet Water Inventory System
            </h3>
          </div>
          <br />
          <hr className="horizontal light mt-0 mb-2" />
          <div
            className="collapse navbar-collapse  w-auto h-auto"
            id="sidenav-collapse-main"
          >
            <ul className="navbar-nav">
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link"
                  target="_blank"
                  onClick={() => {
                    changePage("dashboard");
                  }}
                >
                  <i className="fas fa-chart-line" style={{ fontSize: 15 }} />
                  <span className="nav-link-text ms-2 ps-1">Dashboard</span>
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link"
                  target="_blank"
                  onClick={() => {
                    changePage("stocks");
                  }}
                >
                  <i className="fas fa-cubes" style={{ fontSize: 15 }} />
                  <span className="nav-link-text ms-2 ps-1">Stocks</span>
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link"
                  target="_blank"
                  onClick={() => {
                    changePage("sales");
                  }}
                >
                  <i className="fas fa-store" style={{ fontSize: 15 }} />
                  <span className="nav-link-text ms-2 ps-1">Sales</span>
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link"
                  target="_blank"
                  onClick={() => {
                    changePage("dispatch");
                  }}
                >
                  <i
                    className="fas fa-truck-ramp-box"
                    style={{ fontSize: 15 }}
                  />
                  <span className="nav-link-text ms-2 ps-1">Dispatch</span>
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link"
                  target="_blank"
                  onClick={() => {
                    changePage("staffs");
                  }}
                >
                  <i className="fas fa-user-group" style={{ fontSize: 15 }} />
                  <span className="nav-link-text ms-2 ps-1">Staff</span>
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a
                  className="nav-link"
                  target="_blank"
                  onClick={() => {
                    changePage("invoice");
                  }}
                >
                  <i className="fas fa-file-invoice" style={{ fontSize: 15 }} />
                  <span className="nav-link-text ms-2 ps-1">Invoice</span>
                </a>
              </li>
              <li
                className="nav-item"
                style={{ position: "absolute", bottom: 15, cursor: "pointer" }}
              >
                <a
                  className="nav-link"
                  target="_blank"
                  style={{ backgroundColor: "#c50303", fontWeight: 500 }}
                  id="sign_out"
                >
                  <i className="fas fa-power-off" style={{ fontSize: 15 }} />
                  <span className="nav-link-text ms-2 ps-1">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main
          className="main-content position-relatives max-height-vh-100 h-100 border-radius-lg"
          style={{ width: "100%", marginLeft: "150px" }}
        >
          <div
            data-tauri-drag-region
            className="titlebar"
            style={{ backgroundColor: "#1875be" }}
          >
            <div className="titlebar-button" id="titlebar-minimize">
              <img
                src="https://api.iconify.design/mdi:window-minimize.svg"
                alt="minimize"
              />
            </div>
            <div className="titlebar-button" id="titlebar-close">
              <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
            </div>
          </div>
          <div
            className="container-fluid py-4"
            style={{ display: "block", position: "relative" }}
          >
            <div id="dashboard" className="admin_pages">
              <h4
                className="display-5 "
                style={{
                  fontWeight: "bolder",
                  color: "#1875be",
                  textShadow: "0 0 1px #3788d899",
                }}
              >
                Dashboard
              </h4>
              <div
                className="separator"
                style={{
                  height: 10,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 50,
                }}
              ></div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-30px",
                        }}
                      >
                        <i
                          className="fas fa-truck-fast"
                          style={{ fontSize: 15 }}
                        />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Bags Sold
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_sold" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-45px",
                        }}
                      >
                        <i
                          className="fas fa-money-bill-wave"
                          style={{ fontSize: 15 }}
                        />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Amount Sold
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="amount_sold" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-55px",
                        }}
                      >
                        <i
                          className="fas fa-rotate-left"
                          style={{ fontSize: 15 }}
                        />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Bags Returned
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_return" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <br />
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-30px",
                        }}
                      >
                        <i className="fas fa-store" style={{ fontSize: 15 }} />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Bags Left
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_left" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <br />
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-60px",
                        }}
                      >
                        <i className="fas fa-cubes" style={{ fontSize: 15 }} />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Bags Produced
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_produced" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="stocks" className="admin_pages">
              <h4
                className="display-5 "
                style={{
                  fontWeight: "bolder",
                  color: "#1875be",
                  textShadow: "0 0 1px #3788d899",
                }}
              >
                Stocks
              </h4>
              <div
                className="separator"
                style={{
                  height: 10,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 0,
                }}
              ></div>
              <div
                style={{
                  height: 80,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 50,
                }}
              >
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#stockCreate"
                  style={{
                    width: 120,
                    color: "white",
                    boxShadow: "none",
                    border: "none!important",
                    backgroundColor: "#114e7e",
                    padding: "10px",
                    margin: 10,
                    fontSize: "small",
                    right: 0,
                    position: "absolute",
                  }}
                >
                  Create Today
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="stockCreate"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="modalStockTitle"
                  aria-hidden="true"
                  style={{ borderRadius: "0" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-sm"
                    role="document"
                  >
                    <div
                      className="modal-content"
                      style={{ borderRadius: "0" }}
                    >
                      <div className="modal-body p-0">
                        <div className="card card-plain">
                          <div className="card-header pb-0 text-left">
                            <h5 className>CREATE STOCKS FOR TODAY</h5>
                            <p className="mb-0">
                              Enter the number of bags produced today
                            </p>
                          </div>
                          <div className="card-body pb-3">
                            <form>
                              <div className="form-outline">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="number_of_bags"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="btn bg-gradient-success btn-lg btn-rounded w-100 mt-4 mb-0"
                                  id="stock_create"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Stock ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Current Stock
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Previous Stock
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Stock Produced
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {" "}
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody id="stock_body"></tbody>
                </table>
              </div>
            </div>
            <div id="sales" className="admin_pages">
              <h4
                className="display-5 "
                style={{
                  fontWeight: "bolder",
                  color: "#1875be",
                  textShadow: "0 0 1px #3788d899",
                }}
              >
                Sales
              </h4>
              <div
                className="separator"
                style={{
                  height: 10,
                  width: "80%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 0,
                  marginLeft: 50,
                }}
              >
              </div>
              <div
                style={{
                  height: 80,
                  width: "80%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 50,
                  marginLeft: 50,
                }}
              >
                {/* Button trigger modal */}
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#salesCreate"
                  style={{
                    width: 120,
                    color: "white",
                    boxShadow: "none",
                    border: "none",
                    backgroundColor: "#114e7e",
                    padding: "10px",
                    margin: 10,
                    marginRight: 220,
                    fontSize: "small",
                    right: 0,
                    position: "absolute",
                  }}
                >
                  Sale
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="salesCreate"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="modalsalesTitle"
                  aria-hidden="true"
                  style={{ borderRadius: "0!important" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-md"
                    role="document"
                  >
                    <div
                      className="modal-content"
                      style={{ borderRadius: "0" }}
                    >
                      <div className="modal-body p-0">
                        <div className="card card-plain">
                          <div className="card-header pb-0 text-left">
                            <h3 className>Sales Form</h3>
                            <p className="mb-0" />
                          </div>
                          <div className="card-body pb-3">
                            <form>
                              <div className="form-group">
                                <label htmlFor="in_SalesType">Type</label>
                                <input
                                  name="in_SalesType"
                                  id="in_SalesType"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_Quantity">Quantity</label>
                                <input
                                  name="in_Quantity"
                                  id="in_Quantity"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_CustomerName">
                                  Customer Name
                                </label>
                                <input
                                  name="in_CustomerName"
                                  id="in_CustomerName"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_CustomerPhone">
                                  Customer Phone
                                </label>
                                <input
                                  name="in_CustomerPhone"
                                  id="in_CustomerPhone"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_CustomerAddress">
                                  Customer Address
                                </label>
                                <input
                                  name="in_CustomerAddress"
                                  id="in_CustomerAddress"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_AmountPaid">
                                  Amount Paid
                                </label>
                                <input
                                  name="in_AmountPaid"
                                  id="in_AmountPaid"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_DispatchId">
                                  Dispatch ID
                                </label>
                                <input
                                  name="in_DispatchId"
                                  id="in_DispatchId"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              {/* <div class='form-group'>
                    <label for='in_QuantityReturn'>Quantity Return</label>
                    <input name='in_QuantityReturn' id='in_QuantityReturn' class='form-control' type='text' >
                </div>
                <div class='form-group'>
                    <label for='in_QuantityReplaced'>Quantity Replaced</label>
                    <input name='in_QuantityReplaced' id='in_QuantityReplaced' class='form-control' type='text' >
                </div> */}
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="btn bg-gradient-success btn-lg btn-rounded w-100 mt-4 mb-0"
                                  id="sales_create"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #Receipt No.
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Type
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Quantity
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Customer Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Customer Phone
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Customer Address
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Amount
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #Rider ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Returned
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {" "}
                        Replaced
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {" "}
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody id="sales_body"></tbody>
                </table>
              </div>
            </div>
            <div id="dispatch" className="admin_pages">
              <h4
                className="display-5 "
                style={{
                  fontWeight: "bolder",
                  color: "#1875be",
                  textShadow: "0 0 1px #3788d899",
                }}
              >
                Dispatch Distributors
              </h4>
              <div
                className="separator"
                style={{
                  height: 10,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 0,
                }}
              ></div>
              <div
                style={{
                  height: 80,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 50,
                }}
              >
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#dispatchCreate"
                  style={{
                    width: 120,
                    color: "white",
                    boxShadow: "none",
                    border: "none",
                    backgroundColor: "#114e7e",
                    padding: "10px",
                    margin: 10,
                    fontSize: "small",
                    right: 0,
                    position: "absolute",
                  }}
                >
                  Register
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="dispatchCreate"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="modaldispatchTitle"
                  aria-hidden="true"
                  style={{ borderRadius: "0" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-md"
                    role="document"
                  >
                    <div
                      className="modal-content"
                      style={{ borderRadius: "0" }}
                    >
                      <div className="modal-body p-0">
                        <div className="card card-plain">
                          <div className="card-header pb-0 text-left">
                            <h3 className>Dispatch Registration Form</h3>
                            <br />
                          </div>
                          <div className="card-body pb-3">
                            <form>
                              <div className="form-group">
                                <label htmlFor="in_FirstName">First Name</label>
                                <input
                                  name="in_FirstName"
                                  id="in_FirstName"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_LastName">Last Name</label>
                                <input
                                  name="in_LastName"
                                  id="in_LastName"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_PhoneNumber">
                                  Phone Number
                                </label>
                                <input
                                  name="in_PhoneNumber"
                                  id="in_PhoneNumber"
                                  className="form-control"
                                  type="tel"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_BikeNumberPlate">
                                  Bike Number Plate
                                </label>
                                <input
                                  name="in_BikeNumberPlate"
                                  id="in_BikeNumberPlate"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_RidersLicense">
                                  Riders License
                                </label>
                                <input
                                  name="in_RidersLicense"
                                  id="in_RidersLicense"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="btn bg-gradient-success btn-lg btn-rounded w-100 mt-4 mb-0"
                                  id="dispatch_create"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Rider ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        First Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Last Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone Number
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #Bike Number
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {" "}
                        License ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {" "}
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody id="dispatch_body"></tbody>
                </table>
              </div>
            </div>
            <div id="staffs" className="admin_pages">
              <h4
                className="display-5 "
                style={{
                  fontWeight: "bolder",
                  color: "#1875be",
                  textShadow: "0 0 1px #3788d899",
                }}
              >
                Staff
              </h4>
              <div
                className="separator"
                style={{
                  height: 10,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 0,
                }}
              ></div>
              <div
                style={{
                  height: 80,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 50,
                }}
              >
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staffCreate"
                  style={{
                    width: 120,
                    color: "white",
                    boxShadow: "none!important",
                    border: "none!important",
                    backgroundColor: "#114e7e",
                    padding: "10px !important",
                    margin: 10,
                    fontSize: "small!important",
                    right: 0,
                    position: "absolute",
                  }}
                >
                  Add
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id="staffCreate"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="modalstaffTitle"
                  aria-hidden="true"
                  style={{ borderRadius: "0!important" }}
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-md"
                    role="document"
                  >
                    <div
                      className="modal-content"
                      style={{ borderRadius: "0!important" }}
                    >
                      <div className="modal-body p-0">
                        <div className="card card-plain">
                          <div className="card-header pb-0 text-left">
                            <h5 className>Staff Registration</h5>
                            <br />
                          </div>
                          <div className="card-body pb-3">
                            <form>
                              <div className="form-group">
                                <label htmlFor="in_StaffFirstName">
                                  Staff First Name
                                </label>
                                <input
                                  name="in_StaffFirstName"
                                  id="in_StaffFirstName"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_StaffLastName">
                                  Staff Last Name
                                </label>
                                <input
                                  name="in_StaffLastName"
                                  id="in_StaffLastName"
                                  className="form-control"
                                  type="text"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_StaffPhone">
                                  Staff Phone
                                </label>
                                <input
                                  name="in_StaffPhone"
                                  id="in_StaffPhone"
                                  className="form-control"
                                  type="tel"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_StaffRole">Staff Role</label>
                                <input
                                  name="in_StaffRole"
                                  id="in_StaffRole"
                                  className="form-control"
                                  type="tel"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_DateCreated">
                                  Date Created
                                </label>
                                <input
                                  name="in_DateCreated"
                                  id="in_DateCreated"
                                  className="form-control"
                                  type="datetime"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="in_StaffPassword">
                                  Staff Password
                                </label>
                                <input
                                  name="in_StaffPassword"
                                  id="in_StaffPassword"
                                  className="form-control"
                                  type="password"
                                  style={{
                                    borderRadius: "5px",
                                    border: "1px solid black",
                                  }}
                                />
                              </div>
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="btn bg-gradient-success btn-lg btn-rounded w-100 mt-4 mb-0"
                                  id="staff_create"
                                >
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        #ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Staff ID
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        First Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Last Name
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        {" "}
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody id="Staffs_body"></tbody>
                </table>
              </div>
            </div>
            <div id="invoice" className="admin_pages">
              <h4
                className="display-5 "
                style={{
                  fontWeight: "bolder",
                  color: "#1875be",
                  textShadow: "0 0 1px #3788d899",
                }}
              >
                Invoice
              </h4>
              <div
                className="separator"
                style={{
                  height: 10,
                  width: "100%",
                  background: "#1875be9e",
                  boxShadow: "0 0 3px #647489bd",
                  marginBottom: 50,
                }}
              ></div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-50px",
                        }}
                      >
                        <i
                          className="fas fa-truck-fast"
                          style={{ fontSize: 15 }}
                        />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Bags Sold
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_sold" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-45px",
                        }}
                      >
                        <i
                          className="fas fa-money-bill-wave"
                          style={{ fontSize: 15 }}
                        />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Unit Price
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <p className="text-sm mb-0 text-capitalize ">10.00</p>
                        <h4 className="mb-0 " id="amount_sold" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-45px",
                        }}
                      >
                        <i
                          className="fas fa-rotate-left"
                          style={{ fontSize: 15 }}
                        />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Sub Cost
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_return" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <br />
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-60px",
                        }}
                      >
                        <i className="fas fa-store" style={{ fontSize: 15 }} />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Tax Applied
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <p className="text-sm mb-0 text-capitalize ">0.05</p>
                        <h4 className="mb-0 " id="bags_left" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                  <br />
                  <div className="card ">
                    <div className="card-header p-3 pt-2 bg-transparent">
                      <div
                        className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                        style={{
                          backgroundColor: "#1875be",
                          backgroundImage: "unset",
                          marginLeft: "-50px",
                        }}
                      >
                        <i className="fas fa-cubes" style={{ fontSize: 15 }} />
                      </div>
                      <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize ">
                          Total Cost
                        </p>
                        <br />
                        <hr className="horizontal my-0 dark" />
                        <h4 className="mb-0 " id="bags_produced" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="nav-item"
                  style={{ cursor: "pointer", marginTop: "70px" }}
                >
                  <button
                    id
                    style={{
                      marginRight: 20,
                      color: "azure",
                      borderRadius: 8,
                      marginTop: 7,
                      backgroundColor: "#1875be"
                    }}
                    type="button"
                    onClick={{}}
                  >
                    Compute
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          <footer className="footer py-4  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4"></div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item"></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </main>
        <Helmet>
          <script src="./src/assets/js/core/popper.min.js"></script>
          <script src="./src/assets/js/core/bootstrap.min.js"></script>
          <script src="./src/func.js"></script>
          <script src="./src/stock.js"></script>
          <script src="./src/staff.js"></script>
          <script src="./src/sales.js"></script>
          <script src="./src/dispatch.js"></script>
          <script src="./src/js/admin2.js"></script>
        </Helmet>
      </div>
    </>
  );
}
