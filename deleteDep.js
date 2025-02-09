let deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  let deleteDepId = document.getElementById("idDepartment").value;
  // let deleteDepartmentId = document.getElementById('depId').value;
  if (deleteDepId !== "") {
    let deps = JSON.parse(localStorage.getItem("departments"));

    deps = deps.filter((dep) => {
      return dep.id != deleteDepId;
    });
    localStorage.setItem("departments", JSON.stringify(deps));
  } else {
    alert("fill all fields");
  }
});
