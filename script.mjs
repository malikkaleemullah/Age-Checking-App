function ageChecking(event) {
    event.preventDefault()
    let ageOfPerson = document.querySelector("#age").value 
    // let condition = '';
    // (ageOfPerson < 15)? "Child":
    //     (ageOfPerson < 45)? "young":
    //         (ageOfPerson < 60)? "Old": "retired"

    // if(ageOfPerson <= 15){
    //     condition= "Child"
    // }else if(ageOfPerson <= 45){
    //     condition= "Young"
    // }else if(ageOfPerson >= 45){
    //     condition ="Old"
    // }else {
    //     condition= "retired"
    // }


    message = `your condition is ${(ageOfPerson < 15)? "Child":(ageOfPerson < 45)? "young":(ageOfPerson < 60)? "Old": "retired"}`
    document.querySelector("#result").innerHTML = message
    console.log(message)
}       