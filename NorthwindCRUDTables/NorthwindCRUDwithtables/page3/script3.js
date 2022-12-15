let url = 'https://northwind.vercel.app/api/customers'
let tBody = document.getElementById('tBody');


axios.get(url).then((res)=>{
    res.data.forEach(element => {
        console.log(res.data);
        let trElement = document.createElement('tr');
        let tdCompanyName = document.createElement('td');
        tdCompanyName.innerHTML = element.companyName;
        let tdContactName = document.createElement('td');
        tdContactName.innerHTML = element.contactName;
        let tdDeleteButton = document.createElement('button');
        tdDeleteButton.innerHTML = "Delete"
        //questions
        tdDeleteButton.id = element.id;    
        tdDeleteButton.addEventListener('click', function(e){
            // let delete_btn = e.target.id;
            e.target.parentElement.remove();
        })

        trElement.appendChild(tdCompanyName);
        trElement.appendChild(tdContactName);
        trElement.appendChild(tdDeleteButton);
        trElement.appendChild(tdDeleteButton)
        tBody.appendChild(trElement);
    });

    
})
