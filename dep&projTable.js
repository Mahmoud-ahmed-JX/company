if (localStorage.getItem("departments")) {
  let arr = JSON.parse(localStorage.getItem("departments"));
  let tbody = document.getElementById("details");
  let tbody2 = document.getElementById("project");
  arr.forEach((element) => {
    let tr = document.createElement("tr");
    tr.setAttribute("data-id",element.id)
    for (const data in element) {
      if (data == "projects") {
        if(element[data].length!=0){

        
        element[data].forEach((e) => {
          let tr2 = document.createElement("tr");
          for (const data2 in e) {
            let td2 = document.createElement("td");
            td2.innerText = e[data2];
            tr2.appendChild(td2);
        }
        tr2.style=`row-span:2`
        // tbody2.appendChild(tr2);
        tr.appendChild(tr2)
        
        });}
        else{
          let td2 = document.createElement("td");
          td2.innerText=""
          tr.appendChild(td2)
        }
        continue;
      }
      let td = document.createElement("td");
      td.innerText = element[data];
      tr.appendChild(td);
    }
    let tSalary=document.createElement("td")
    tSalary.innerText=(()=>{
     let employees=JSON.parse(localStorage.getItem("employees"))
     let salarys=0;
     employees.forEach(emp => {
      if(emp.depId==element.id){
        salarys+=+emp.salary;
      }
      
     });
     return salarys; 
    })()
    tr.appendChild(tSalary)
    

    tbody.appendChild(tr);
  });


  
  let search = document.querySelector("#search");
  search.addEventListener("input", (e) => {
    let trs = tbody.querySelectorAll("tr");
    
    trs.forEach((tr,i) => {
      if(i%2==0){
      let dataID = tr.getAttribute("data-id");
      if (dataID.includes(e.currentTarget.value)) {
        tr.style = `display:table-row;
                text-align:center`;
      } else {
        tr.style = "display:none";
      }}
    });
  });}



