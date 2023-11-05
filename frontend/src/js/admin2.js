document.querySelector('#stock_create').addEventListener('click', (e) => {
    insertStockRecord(document.querySelector('#number_of_bags').value)
        .then((data) => {
            location.reload();
        })
        .catch(error => console.error(error));
    // console.log();
});

// dispatch_create
// staff_create


document.querySelector('#dispatch_create').addEventListener('click', (e) => {
    const firstName = document.getElementById('in_FirstName').value;
    const lastName = document.getElementById('in_LastName').value;
    const phoneNumber = document.getElementById('in_PhoneNumber').value;
    const bikeNumberPlate = document.getElementById('in_BikeNumberPlate').value;
    const ridersLicense = document.getElementById('in_RidersLicense').value;
    const record = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        bike_number_plate: bikeNumberPlate,
        riders_license: ridersLicense
    };
    createDispatchRecord(record).then((data) => {
        if (data.status == "success") {
            location.reload();


        } else if (data.status == "unsuccess") {


        }
    });
});
document.querySelector('#staff_create').addEventListener('click', (e) => {

    const firstName = document.getElementById('in_StaffFirstName').value;
    const lastName = document.getElementById('in_StaffLastName').value;
    const phone = document.getElementById('in_StaffPhone').value;
    const role = document.getElementById('in_StaffRole').value;
    const password = document.getElementById('in_StaffPassword').value;


    const staffData = {
        staff_first_name: firstName,
        staff_last_name: lastName,
        staff_phone: phone,
        staff_role: role,
        staff_password: password
    };

    insertStaffRecord(staffData)
        .then((data) => {
            if (data.status == "success") {
                location.reload();


            } else if (data.status == "unsuccess") {


            }
        })
        .catch(error => console.error(error));

});





document.querySelector('#sales_create').addEventListener('click', (e) => {


    const salesType = document.querySelector('#in_SalesType').value;
    const quantity = document.querySelector('#in_Quantity').value;
    const customerName = document.querySelector('#in_CustomerName').value;
    const customerPhone = document.querySelector('#in_CustomerPhone').value;
    const customerAddress = document.querySelector('#in_CustomerAddress').value;
    const amountPaid = document.querySelector('#in_Quantity').value * 10;
    const dispatchId = document.querySelector('#in_DispatchId').value;
    const saleData = {
        sales_type: salesType,
        quantity: quantity,
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_address: customerAddress,
        amount_paid: amountPaid,
        dispatch_id: dispatchId
    };

    insertSale(saleData)
        .then(
            (data) => {
                if (data.status == "success") {
                    location.reload();


                } else if (data.status == "unsuccess") {


                }

            })
        .catch(error => console.error('Error inserting sale:', error));
    console.log(error);
});







function changePage(page) {
    document.querySelectorAll('.admin_pages').forEach((admin_pages) => {
        admin_pages.style.display = "none";
    });
    switch (page) {
        case "dashboard":
            dashboard();
            break;
        case "stocks":
            stocks();
            break;
        case "sales":
            sales();
            break;
        case "dispatch":
            dispatch();
            break;
        case "staffs":
            staffs();
            break;
        case "invoice":
            invoice();
            break;
        default:
            dashboard();
    }
    function dashboard() {
        ru();
        document.getElementById('dashboard').style.display = "block";
    }
    function stocks() {
        document.getElementById('stocks').style.display = "block";
        const stock_tbody = document.querySelector('#stock_body');
        getAllStockRecords()
            .then((data) => {
                stock_tbody.innerHTML = "";
                data.forEach(dts => {
                    let { id, stock_id, stock_current, stock_previous, stock_produced, date } = dts;
                    stock_tbody.innerHTML += `<tr>
                <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${stock_id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${stock_current}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${stock_previous}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${stock_produced}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${date}</span></td>
              </tr>`;
                });
                // console.log(data);
            })
            .catch(error => console.error(error));
    }
    function sales() {
        document.getElementById('sales').style.display = "block";

        const sales_tbody = document.querySelector('#sales_body');
        getAllSales().then((response) => {
            sales_tbody.innerHTML = "";
            response.forEach(dts => {
                let { id,
                    sales_receipt,
                    sales_type,
                    quantity,
                    customer_name,
                    customer_phone,
                    customer_address,
                    amount_paid,
                    dispatch_id,
                    quantity_return,
                    quantity_replaced,
                    date } = dts;
                sales_tbody.innerHTML += `<tr>
                <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${sales_receipt}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${sales_type}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${quantity}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${customer_name}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${customer_phone}</span></td> 
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${customer_address}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${amount_paid}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${dispatch_id}</span></td> 
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${quantity_return}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${quantity_replaced}</span></td> 
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${date}</span></td>
              </tr>`;
            });
            // console.log(data);
        })
            .catch(error => console.error(error));

    }
    function dispatch() {
        document.getElementById('dispatch').style.display = "block";


        const dispatch_tbody = document.querySelector('#dispatch_body');
        getDispatchRecords()
            .then((response) => {
                dispatch_tbody.innerHTML = "";
                response.forEach(dts => {
                    let { id, dispatch_id, first_name, last_name, phone_number, bike_number_plate, riders_license, date_created } = dts;
                    dispatch_tbody.innerHTML += `<tr>
                <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${dispatch_id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${first_name}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${last_name}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${phone_number}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${bike_number_plate}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${riders_license}</span></td> 
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${date_created}</span></td>
              </tr>`;
                });
                // console.log(data);
            })
            .catch(error => console.error(error));
    }
    function staffs() {
        // Staffs_body


        document.getElementById('staffs').style.display = "block";

        const Staffs_tbody = document.querySelector('#Staffs_body');
        getAllStaffRecords()
            .then((response) => {
                Staffs_tbody.innerHTML = "";
                response.data.forEach(dts => {
                    let { id, staff_id, staff_first_name, staff_last_name, staff_phone, staff_role } = dts;
                    Staffs_tbody.innerHTML += `<tr>
                <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${staff_id}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${staff_first_name}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${staff_last_name}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${staff_phone}</span></td>
                  <td class='align-middle text-center'><span class='text-secondary text-xs font-weight-normal'>${staff_role}</span></td>
              </tr>`;
                });
                // console.log(data);
            })
            .catch(error => console.error(error));
    }
    function invoice() {
        ru();
        document.getElementById('invoice').style.display = "block";
    }
}
var win = navigator.platform.indexOf('Win') > -1;
if (win && document.querySelector('#sidenav-scrollbar')) {
    var options = {
        damping: '0.5'
    }
    Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
}