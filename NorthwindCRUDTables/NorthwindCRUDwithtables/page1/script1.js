let url = 'https://northwind.vercel.app/api/categories'
let nameInput = document.getElementById('name');
let descriptionInput = document.getElementById('description');
let addBtn = document.querySelector('.addBtn')

function add(){
    let info = {
        name:nameInput.value,
        description: descriptionInput.value
    }
    axios.post(url,info).then((res)=>{
        
    })
    }

   


