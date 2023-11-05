import { Helmet } from "react-helmet";

export default function Staff() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="./src/styles.css" />
      <link rel="stylesheet" href="./src/staff.css" />
      <link
        rel="stylesheet"
        href="./src/assets/css/material-dashboard.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rock Mineral Water</title>
      <Helmet>
        <script type="module" src="./src/main.js" defer></script>
        <script src="./src/func.js"></script>
        <script type="module" src="./src/access.js" defer></script>
      </Helmet>
      <link
        id="pagestyle"
        href="./src/assets/css/material-dashboard.min.css"
        rel="stylesheet"
      />
      <link
        href="./src/assets/fontawesome-free-6.4.0-web/css/all.css"
        rel="stylesheet"
      />
      <Helmet>
        <script src="./src/assets/js/material-dashboard.min.js"></script>
        <script async defer src="./src/assets/js/buttons.js"></script>
        <script type="module" src="./src/access.js" defer></script>
        <script type="module" src="./src/js/staff1.js" defer></script>
      </Helmet>
      <style
        dangerouslySetInnerHTML={{
          __html: "\n    .icon{z-index: 1020;}\n\n  ",
        }}
      />
      <div
        data-tauri-drag-region
        className="titlebar"
        style={{ zIndex: "1000" }}
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
      <div className="staffDash">
        <div className="row container-fluid">
          <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div className="card " style={{ marginTop: 7 }}>
              <div className="card-header p-3 pt-2 bg-transparent">
                <div
                  className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                  style={{
                    backgroundColor: "#EAAF31",
                    backgroundImage: "unset",
                  }}
                >
                  <i className="fas fa-truck-fast" style={{ fontSize: 15 }} />
                </div>
                <div className="text-end pt-1">
                  <p className="text-sm mb-0 text-capitalize">Bags Sold</p>
                  <br />
                  <hr className="horizontal my-0 dark" />
                  <h4 className="mb-0 " id="bags_sold" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div className="card " style={{ marginTop: 7 }}>
              <div className="card-header p-3 pt-2 bg-transparent">
                <div
                  className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                  style={{
                    backgroundColor: "#EAAF31",
                    backgroundImage: "unset",
                  }}
                >
                  <i
                    className="fas fa-money-bill-wave"
                    style={{ fontSize: 15 }}
                  />
                </div>
                <div className="text-end pt-1">
                  <p className="text-sm mb-0 text-capitalize ">Amount</p>
                  <br />
                  <hr className="horizontal my-0 dark" />
                  <h4 className="mb-0 " id="amount_sold" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div className="card " style={{ marginTop: 7 }}>
              <div className="card-header p-3 pt-2 bg-transparent">
                <div
                  className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                  style={{
                    backgroundColor: "#EAAF31",
                    backgroundImage: "unset",
                  }}
                >
                  <i className="fas fa-rotate-left" style={{ fontSize: 15 }} />
                </div>
                <div className="text-end pt-1">
                  <p className="text-sm mb-0 text-capitalize ">Returned</p>
                  <br />
                  <hr className="horizontal my-0 dark" />
                  <h4 className="mb-0 " id="bags_return" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div className="card " style={{ marginTop: 7 }}>
              <div className="card-header p-3 pt-2 bg-transparent">
                <div
                  className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                  style={{
                    backgroundColor: "#EAAF31",
                    backgroundImage: "unset",
                  }}
                >
                  <i className="fas fa-store" style={{ fontSize: 15 }} />
                </div>
                <div className="text-end pt-1">
                  <p className="text-sm mb-0 text-capitalize ">Bags Left</p>
                  <br />
                  <hr className="horizontal my-0 dark" />
                  <h4 className="mb-0 " id="bags_left" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <div className="card" style={{ marginTop: 7 }}>
              <div className="card-header p-3 pt-2 bg-transparent">
                <div
                  className="icon icon-lg icon-shape bg-gradient-info text-center border-radius-xl mt-n4 position-absolute"
                  style={{
                    backgroundColor: "#EAAF31",
                    backgroundImage: "unset",
                  }}
                >
                  <i className="fas fa-cubes" style={{ fontSize: 15 }} />
                </div>
                <div className="text-end pt-1">
                  <p className="text-sm mb-0 text-capitalize ">Produced</p>
                  <br />
                  <hr className="horizontal my-0 dark" />
                  <h4 className="mb-0 " id="bags_produced" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#salesCreate">Sell</button> */}
          <button
            id
            className="bg-gradient-success"
            style={{
              marginRight: 20,
              color: "azure",
              borderRadius: 8,
              marginTop: 7,
            }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#salesCreate"
          >
            Sell
          </button>
          <div
            className="modal fade "
            id="salesCreate"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modalsalesTitle"
            aria-hidden="true"
            style={{ borderRadius: "0"}}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-md"
              role="document"
            >
              <div className="modal-content" style={{ borderRadius: "0" }}>
                <div className="modal-body p-0">
                  <div className="card card-plain">
                    <div className="card-header pb-0 text-left">
                      <h3 className>Sales</h3>
                      <p className="mb-0" />
                    </div>
                    <div className="card-body pb-3">
                      <form>
                        <div className="form-group" >
                          <label htmlFor="in_SalesType">Type</label>
                          <input
                            name="in_SalesType"
                            id="in_SalesType"
                            className="form-control"
                            type="text"
                            style={{ borderRadius: "5px", border: "1px solid black"}}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="in_Quantity">Quantity</label>
                          <input
                            name="in_Quantity"
                            id="in_Quantity"
                            className="form-control"
                            type="text"
                            style={{ borderRadius: "5px", border: "1px solid black"}}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="in_CustomerName">Customer Name</label>
                          <input
                            name="in_CustomerName"
                            id="in_CustomerName"
                            className="form-control"
                            type="text"
                            style={{ borderRadius: "5px", border: "1px solid black"}}
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
                            style={{ borderRadius: "5px", border: "1px solid black"}}
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
                            style={{ borderRadius: "5px", border: "1px solid black"}}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="in_AmountPaid">Amount Paid</label>
                          <input
                            name="in_AmountPaid"
                            id="in_AmountPaid"
                            className="form-control"
                            type="text"
                            disabled
                            style={{ borderRadius: "5px", border: "1px solid black"}}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="in_DispatchId">Dispatch ID</label>
                          <input
                            name="in_DispatchId"
                            id="in_DispatchId"
                            className="form-control"
                            type="text"
                            style={{ borderRadius: "5px", border: "1px solid black"}}
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
          <hr />
          <button
            id="sign_out"
            className="bg-gradient-danger"
            style={{
              marginRight: 20,
              color: "azure",
              width: 150,
              borderRadius: 8,
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <br />
        <h5
          style={{
            fontWeight: "bolder",
            color: "#1875be",
            textShadow: "0 0 1px #3788d899",
            position: "fixed",
            left: "0",
            marginTop: "-25px",
            marginLeft: "70px",
          }}
        >
          Today's Sales
        </h5>
        <div
          className="card"
          style={{ position: "fixed", left: "0", marginLeft: 70 }}
        >
          <div className="table-responsive">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
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
                    Replaced
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody id="sales_body"></tbody>
            </table>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="./src/sales.js"></script>
        <script src="./src/assets/js/core/popper.min.js"></script>
        <script src="./src/assets/js/core/bootstrap.min.js"></script>
        <script src="./src/js/staff2.js"></script>
      </Helmet>
    </div>
  );
}
