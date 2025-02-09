let update=document.getElementById("update")

update.addEventListener("click",(e)=>{
    let id=document.getElementById("idDepartment")
    let name=document.getElementById("nameDepartment")
    let locat=document.getElementById("locationDepartment")
    if(localStorage.getItem("departments")){
    let arr=JSON.parse(localStorage.getItem("departments"))
    
    if(id.value!=""){
    arr.forEach(e => {
        if(id.value==e.id){
           if(name.value!=""&&locat.value!=""){ 
            e.name=name.value  
          e.location=locat.value  
           }
           else if(name.value!=""&&locat.value=="")
            {
                e.name=name.value
            
           }
           else if(name.value==""&&locat.value!="")
            {
                e.location=locat.value
            }
            else{
                alert("fill at least one field")
            }
        }
        
    });
    localStorage.setItem("departments",JSON.stringify(arr))
}else{
    alert("fill id")
}

      }
})