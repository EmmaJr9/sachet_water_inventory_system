document.querySelector('#sales_create').addEventListener('click', (e) => {


    const salesType = document.querySelector('#in_SalesType').value;
    const quantity = document.querySelector('#in_Quantity').value;
    const customerName = document.querySelector('#in_CustomerName').value;
    const customerPhone = document.querySelector('#in_CustomerPhone').value;
    const customerAddress = document.querySelector('#in_CustomerAddress').value;
    const amountPaid = document.querySelector('#in_AmountPaid').value;
    const dispatchId = document.querySelector('#in_DispatchId').value;
    const saleData = {
        sales_type: salesType,
        quantity: quantity,
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_address: customerAddress,
        amount_paid: amountPaid,
        dispatch_id: dispatchId,
    };

    insertSale(saleData)
        .then(function (data) {
            location.reload();
        })
        .catch(error => console.error('Error inserting sale:', error));
    // console.log();
});

function sales() {
    const sales_tbody = document.querySelector('#sales_body');
    getAllSales().then((response) => {
        sales_tbody.innerHTML = "";
        response.forEach(dts => {
            let {
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


sales();