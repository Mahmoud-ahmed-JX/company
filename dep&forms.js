let projBtn=document.querySelector("#projBtn")
let projects=[]
projBtn.addEventListener("click",()=>{
    
    let id=document.getElementById("idProject")
    let nameProject=document.getElementById("nameProject")
    let numberOfHours=document.getElementById("numberOfHours")
    let locationProject=document.getElementById("locationProject")
    
    
    let project={
        id:id.value,
        nameProject:nameProject.value,
        numberOfHours:numberOfHours.value,
        locationProject:locationProject.value,

    }
    if(id.value!==""&&nameProject.value!==""&&numberOfHours.value!==""&&locationProject.value!==""){
    projects.push(project)
    }
    else{
        window.alert("fill all fields")
        
    }
})

let depBtn=document.getElementById("submit")

depBtn.addEventListener("click",()=>{
    let manager=document.getElementById("idManager")
    let id=document.getElementById("idDepartment")
    let name=document.getElementById("nameDepartment")
    let location=document.getElementById("locationDepartment")
    let date=document.getElementById("startingDate")

    let dep={
        manager:manager.value,
        id:id.value,
        name:name.value,
        location:location.value,
        date:date.value,
        projects,
    }

    if(id.value!==""&&name.value!==""&&date.value!==""&&location.value!==""){
        if(window.localStorage.getItem("departments")){
            let arr=JSON.parse(window.localStorage.getItem("departments"))
            arr.push(dep)
            window.localStorage.setItem("departments",JSON.stringify(arr))
            projects=[]
            
        }else{
            
        window.localStorage.setItem("departments",JSON.stringify([dep]))
    }
    }else{
        alert("fill all fields")
    }
})