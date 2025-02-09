
let emp_btn=document.querySelector(".submit")
//add skills
let skills_arr=[]
    let skill_btn=document.querySelector("#skill_btn")
    skill_btn.addEventListener("click",()=>{
        
        let skill=document.querySelector("#skillsInput"); 
        skills_arr.push(skill.value)
        skill.value="";
        skill.focus()
        console.log(skills_arr)
    })




emp_btn.addEventListener("click",(e)=>{
    e.preventDefault
    let id=document.querySelector("#id");
    let name=document.querySelector("#name");
    let salary=document.querySelector("#salary");
    let pfRate=document.querySelector("#performanceRate");
    let age=document.querySelector("#age");
    let date=document.querySelector("#dateOfBirth");
    let gender=document.querySelectorAll("#gender");
    let status=document.querySelectorAll("#status");
    
    
    if(gender[0].checked){
        gender=gender[0].value
    }
    else if(gender[1].checked){
        gender=gender[1].value
    }
    if(status[0].checked){
        status=status[0].value
    }
    else if(status[1].checked){
        status=status[1].value
    }
    
    let employee={
        id:id.value,
        name:name.value,
        salary:salary.value,
        pfRate:pfRate.value,
        age:age.value,
        date:date.value,
        gender,
        skills_arr,
        status,
        depId:"",
        projId:"",
        
        
        
    }
    if(id.value!==""&&name.value!==""&&salary.value!==""&&pfRate.value!==""&&age.value!==""&&date.value!==""){
        if(window.localStorage.getItem("employees")){
            let arr=JSON.parse(window.localStorage.getItem("employees"))
            arr.push(employee)
            window.localStorage.setItem("employees",JSON.stringify(arr))
            skills_arr=[]
        }else{
            
        window.localStorage.setItem("employees",JSON.stringify([employee]))
    }}
    else{
        alert("fill all fields")
    }
})


