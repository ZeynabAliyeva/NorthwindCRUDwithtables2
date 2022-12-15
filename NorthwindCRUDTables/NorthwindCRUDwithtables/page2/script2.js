let url = "https://northwind.vercel.app/api/suppliers"
let tBdy = document.getElementById('tBdy');
let company_name = document.getElementById('company_name');
let contact_name = document.getElementById('contact_name');
let title_name = document.getElementById('title_name')
let region = document.getElementById('region')
let clickBtn = document.getElementById('clickBtn');
let closeBtn = document.getElementById('closeBtn');
let idArray= []

function addData(res){
    res.data.forEach(element => {
        let trElement = document.createElement('tr')
        let tdCompanyName = document.createElement('td')
        tdCompanyName.innerHTML = element.companyName;
        let tdContactName = document.createElement('td')
        tdContactName.innerHTML = element.contactName;
        let tdContactTitle = document.createElement('td')
        tdContactTitle.innerHTML = element.contactTitle;
        let region_n_td = document.createElement('td')
        // region_n_td.innerHTML = element.address.region; ???
        let upDate = document.createElement('button')
        upDate.innerText = "Update"

        upDate.addEventListener('click',(e)=>{
        company_name.value=element.companyName;
        contact_name.value = element.contactName;
        title_name.value=element.contactTitle;
        idArray.push(element.id)
        
        })


        trElement.appendChild(tdCompanyName);
        trElement.appendChild(tdContactName);
        trElement.appendChild(tdContactTitle);
        trElement.appendChild(region_n_td);
        trElement.appendChild(upDate);
        tBdy.appendChild(trElement);

    });
}

function putMethod(companyName,contactName,contactTitle,id){
axios.put(`https://northwind.vercel.app/api/suppliers/${id}`,{
    companyName:companyName,
    contactName:contactName,
    contactTitle:contactTitle,
    id:id,

}).then(()=>{
    addData();
})
}

clickBtn.addEventListener('click',()=>{
     putMethod(company_name.value,contact_name.value,title_name.value,idArray[0])
}) 

axios.get(url).then((res)=>{
    addData(res)
})
   