const student = {
    name:"hemant",
    age:22,
    major:'computer science',
    isEnrolled: true
    };
    
    
    function displayStudentInfo(){
    for (const key in student){
        console.log(`${key},${student}`)
    } 
    } 
    
    let  display = displayStudentInfo()
    console.log(display,student)