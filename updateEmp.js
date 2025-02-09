let update=document.getElementById("update")

update.addEventListener("click",(e)=>{
    let id=document.getElementById("id")
    let salary=document.getElementById("salary")
    let depId=document.getElementById("depId")
    let projId=document.getElementById("projId")
    if(localStorage.getItem("employees")){
    let arr=JSON.parse(localStorage.getItem("employees"))
   
    
    if(id.value!=""){
    arr.forEach(e => {
        
        if(e.id === id.value){
            if(salary.value !== "" && depId.value !== "" && projId.value !== ""){
                e.salary = salary.value;
                e.depId = depId.value;
                e.projId = projId.value;
            }
            else if(salary.value == "" && depId.value !== "" && projId.value !== ""){
                e.depId = depId.value;
                e.projId = projId.value;
            }
            else if(salary.value == "" && depId.value == "" && projId.value !== ""){
                e.projId = projId.value;
            }
            else if(salary.value !== "" && depId.value == "" && projId.value !== ""){
                e.salary = salary.value;
                e.projId = projId.value;
            }
            else if(salary.value !== "" && depId.value !== "" && projId.value == ""){
                e.salary = salary.value;
                e.depId = depId.value;
            }
            else if(salary.value == "" && depId.value !== "" && projId.value == ""){
                e.depId = depId.value;
            }
            else if(salary.value !== "" && depId.value == "" && projId.value == ""){
                e.salary = salary.value;
            }else{
                alert("fill at least one");
            }
        }
        
        })
    
    localStorage.setItem("employees",JSON.stringify(arr))
}else{
    alert("fill id")
}

      }
})