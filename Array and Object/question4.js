let  students = []

function addStudent(id,firstname,lastname,age,grade){
    let  newStudents = {
        id: id ,
        firstname:  firstname ,
        lastname:  lastname ,
        age:   age ,
        grade:  grade 
    }
   students.push(newStudents)
}

let  adding = addStudent(1,"hmanr","vijae",123,"a")
console.log(students)

 function updatingThroughID(id,updateinfo){
    let index =  students.findIndex((students => students.id==id))
    if(index!==id){
        students[index]= {...students[index] , updateinfo}
        console.log(`information updated ${id}`)
   }else{
    console.log(`students ${id} not found`)
   }
}

let update = updatingThroughID(1,{age:18})
console.log(update)

function deletingthroughId(id){
    let index =  students.findIndex((students => students.id==id))

    if(index!==-1){
        students.splice(index,1)
        console.log(`information deleted ${id} successfully`)
   }else{
    console.log(`students ${id} not found for deletion`)
   }
}

function displayingList(){
students.forEach(student=>{
    console.log(`Id: ${student.id}, firstname: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
})

}

let fordisplaying = displayingList()
console.log(fordisplaying);


function findingstudentsthroughgrade(grade){
    const studentswithgrade = students.filter(student=> student.grade==grade)
    return studentswithgrade

}

function calculatingaverage(){
    if(students.length==0){
        return 0
    }
    const totalAge = students.reduce((acc,student)=>acc+student.age,0)
    return totalAge/students.length
}

