function ageChecking(event) {
    event.preventDefault()
    let ageOfPerson = document.querySelector("#age").value 
    let condition = '';

    if(ageOfPerson <= 15){
        condition= "Child"
    }else if(ageOfPerson <= 45){
        condition= "Young"
    }else if(ageOfPerson >= 45){
        condition ="Old"
    }else {
        condition= "retired"
    }
    console.log(condition)
    message = `your condition is ${condition}`
    document.querySelector("#result").innerHTML = message
}