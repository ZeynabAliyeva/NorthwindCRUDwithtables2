let url = 'https://northwind.vercel.app/api/orders';
let tBody = document.getElementById('tBody');
let filtered = order_data.filter((element)=>{

})

axios.get(url).then((res)=>{
    res.data.forEach(element => {
        let trElement = document.createElement('tr')
        let customer_id = document.createElement('td')
        customer_id.innerHTML = element.customerId;
        let employee_id = document.createElement('td');
        employee_id.innerHTML = element.employeeId;
        let order_data = document.createElement('td');
        order_data.innerHTML = element.orderDate;

        trElement.appendChild(customer_id);
        trElement.appendChild(employee_id);
        trElement.appendChild(order_data);
        tBody.appendChild(trElement)
        });
})
//function for97() {
    //     axios.get("https://northwind.vercel.app/api/orders").then((response) => {
          
    //       let filtered = addData.filter((element) => {
    //         let dateOrder = new Date(element.orderDate).getFullYear();
    //         return dateOrder >= 1996 && dateOrder <= 1997;
            
    //       })
    //       })
          
    // }
    // console.log(filtered);
