if (window.localStorage.getItem("employees")) {
  let arr = JSON.parse(window.localStorage.getItem("employees"));
  let tbody = document.getElementById("details");
  arr.forEach((emp) => {
    let tr = document.createElement("tr");
    tr.style = "text-align:center";
    tr.setAttribute("data-id", emp.id);
    tr.setAttribute("data-gender", emp.gender);
    tr.setAttribute("data-status", emp.status);
    tr.setAttribute("data-performance",emp.pfRate)
    for (const data in emp) {
      let td = document.createElement("td");
      td.innerText = emp[data];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  let search = document.querySelector("#search");
  search.addEventListener("input", (e) => {
    let trs = tbody.querySelectorAll("tr");
    trs.forEach((tr) => {
      let dataID = tr.getAttribute("data-id");
      if (dataID.includes(e.currentTarget.value)) {
        tr.style = `display:table-row;
                text-align:center`;
      } else {
        tr.style = "display:none";
      }
    });
  });

  let select = document.getElementById("filter");
  select.addEventListener("change", (e) => {
      let trs = tbody.querySelectorAll("tr");

      switch(e.currentTarget.value){
        case "male":
        trs.forEach(tr=>{
            if(tr.getAttribute('data-gender') != "male"){
                tr.style = `display: none;`
            }else{
                tr.style = `display: table-row; text-align:center;`
            }
        })
        break;
        case "female":
        trs.forEach(tr=>{
            if(tr.getAttribute('data-gender') != "female"){
                tr.style = `display: none;`
            }else{
                tr.style = `display: table-row; text-align: center;`
            }
        })
        break;
        case "active":
            trs.forEach(tr=>{
                if(tr.getAttribute('data-status') != "active"){
                    tr.style = `display: none;`
                }else{
                    tr.style = `display: table-row; text-align: center;`
                }
            })
            break;
        case "inactive":
            trs.forEach(tr=>{
                if(tr.getAttribute('data-status') != "inactive"){
                    tr.style = `display: none;`
                }else{
                    tr.style = `display: table-row; text-align: center;`
                }
            })
            break;
            case "performace":
                let max=trs[0]
                trs.forEach(tr=>{
                    if(tr.getAttribute("data-performance")>= max.getAttribute("data-performance")){
                        max.style="display:none"
                        max=tr
                        max.style = `display: table-row; text-align: center;`
                        // console.log("test")
                    }else{
                        console.log("test")
                        tr.style = `display: none; `
                    }
                })
                break;
            default:
                trs.forEach(tr=>{
                        tr.style = `display: table-row; text-align: center;`
                })
      }
  });
}

