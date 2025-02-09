let update = document.getElementById("update");

update.addEventListener("click", (e) => {
  let depId = document.getElementById("depId");
  let id = document.getElementById("idProject");
  let hours = document.getElementById("numberOfHours");
  let name = document.getElementById("nameProject");
  let locat = document.getElementById("locationProject");
  if (localStorage.getItem("departments")) {
    let arr = JSON.parse(localStorage.getItem("departments"));
    if(depId.value !== ""){
        arr.forEach(dep => {
            dep.projects.forEach((proj)=>{
                if(proj.id === id.value){
                    if(name.value !== "" && locat.value !== "" && hours.value !== ""){
                        proj.nameProject = name.value;
                        proj.locationProject = locat.value;
                        proj.numberOfHours = hours.value;
                    }
                    else if(name.value == "" && locat.value !== "" && hours.value !== ""){
                        proj.locationProject = locat.value;
                        proj.numberOfHours = hours.value;
                    }
                    else if(name.value == "" && locat.value == "" && hours.value !== ""){
                        proj.numberOfHours = hours.value;
                    }
                    else if(name.value !== "" && locat.value == "" && hours.value !== ""){
                        proj.nameProject = name.value;
                        proj.numberOfHours = hours.value;
                    }
                    else if(name.value !== "" && locat.value !== "" && hours.value == ""){
                        proj.nameProject = name.value;
                        proj.locationProject = locat.value;
                    }
                    else if(name.value == "" && locat.value !== "" && hours.value == ""){
                        proj.locationProject = locat.value;
                    }
                    else if(name.value !== "" && locat.value == "" && hours.value == ""){
                        proj.nameProject = name.value;
                    }else{
                        alert("fill at least one");
                    }
                }
            })
        });
        localStorage.setItem("departments", JSON.stringify(arr));
    }else{
        alert("write department id");
    }
  }
});
