let deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  let deleteEmployeeId = document.getElementById("empId").value;
  // let deleteDepartmentId = document.getElementById('depId').value;
  if (deleteEmployeeId !== "") {
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees = employees.filter((emp) => {
      return emp.id != deleteEmployeeId;
    });
    localStorage.setItem("employees", JSON.stringify(employees));
  } else {
    alert("fill all fields");
  }
});
