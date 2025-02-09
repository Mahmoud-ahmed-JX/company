let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", () => {
  let deleteProjId = document.getElementById("idProj").value;
  let deleteDepartmentId = document.getElementById("depId").value;
  if (deleteDepartmentId !== "" && deleteProjId !== "") {
    let deps = JSON.parse(localStorage.getItem("departments"));
    console.log(deps);
    deps=deps.map((dep) => {
      if (dep.id == deleteDepartmentId) {
        dep.projects = dep.projects.filter((proj) => {
          return proj.id !== deleteProjId;
        });
      }
      return dep;
    });
    localStorage.setItem("departments", JSON.stringify(deps));
  } else {
    alert("fill all fields");
  }
});
