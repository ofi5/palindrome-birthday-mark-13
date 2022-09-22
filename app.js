const Dob = document.querySelector("#dob");
const Btn = document.querySelector('#btn');
const Msg = document.querySelector("#msg")


const convertDatetoformat= (Date) => {
    let Dae = Date.split("")
    let year = Dae.slice(0,4)
    let month = Dae.slice(4,6)
    let day= Dae.slice(6,9)
    let dates = (day.join("") + month.join("") + year.join(""))
   let DDMMYY = day.join("") + month.join("") + year.slice(2,4).join("") 
   return DDMMYY
   }

const chkReverse = (data) => {
    let dataArray = data.split("")
   let revArray = dataArray.reverse()
    let rev = revArray.join("")
   if (rev === data){
        return true
   }else {
        return false
   }
}


const increaseDate=(date) => {


    let NewDate = date.split("")
    
    let newDay = Number(NewDate.slice(0,2).join(""))
    
    let newMonth = Number(NewDate.slice(2,4).join(""))
    let newYear = Number(NewDate.slice(4,6).join(""))

if (newYear%4==0 && newMonth==2 && newDay==28){
    newDay = 29

} else if (newYear == 99 && (newMonth == 12) && (newDay == 31)){
        newYear=0
        newMonth=1
        newDay=1

}else if ((newMonth == 12) && (newDay == 31)) {

    newYear = newYear+1 
    newMonth = 1
    newDay = 1
    

}else if ( ( newMonth==1)|| ( newMonth==3) ||( newMonth==5)|| ( newMonth==7)|| ( newMonth==8)|| ( newMonth==10)|| ( newMonth==12)){
    if (newDay == 31) {
        newDay = 1
        newMonth = newMonth + 1 
    } else{
        newDay =newDay + 1
    }
}else if (( newMonth==4) ||( newMonth==6)|| ( newMonth==9)|| ( newMonth==11)) {
    if (newDay == 30){
        newDay=1 
        newMonth =newMonth + 1
    }else {
        newDay = newDay + 1
    } 

}else if (newMonth == 2){
    if (newDay == 28 || newDay == 29) {
        newDay=1
        newMonth = newMonth + 1

    } else {
        newDay = newDay +1
    }
}




    let zeroError = '0'
   if (newDay<10){

    newDay = zeroError + newDay.toString()
    
   }else{
    newDay = newDay.toString()
   }

   if (newMonth<10){

    newMonth = zeroError + newMonth.toString()
    
   }else{
    newMonth = newMonth.toString()
   }

   if (newYear<10){
     newYear = zeroError + newYear.toString()
   }else{
    newYear = newYear.toString()
   }
    let DDMMYY = newDay + newMonth + newYear 
    
    return DDMMYY 
} 


const decreaseDate=(date) => {


    let NewDate = date.split("")
    
    let newDay = Number(NewDate.slice(0,2).join(""))
    
    let newMonth = Number(NewDate.slice(2,4).join(""))
    let newYear = Number(NewDate.slice(4,6).join(""))

    if (newYear%4==0 && newMonth==3 && newDay==1){
    newDay = 29
    newMonth = 2

    } else if (newYear == 00 && (newMonth == 1) && (newDay == 1)){
        newYear=99
        newMonth=12
        newDay=31

    }   else if ((newMonth == 01) && (newDay == 1)) {

    newYear = newYear-1 
    newMonth = 12
    newDay = 31
    

}else if (( newMonth==1) ||( newMonth==5)|| ( newMonth==7)|| ( newMonth==10)|| ( newMonth==12)){
    if (newDay == 1) {
        newDay = 30
        newMonth = newMonth - 1 
    } else{
        newDay =newDay - 1
    }
}else if (( newMonth==2)||( newMonth==4) ||( newMonth==6)||( newMonth==8)||( newMonth==9)|| ( newMonth==11)) {
    if (newDay == 1){
        newDay=31 
        newMonth =newMonth -1
    }else {
        newDay = newDay -1 
    } 

}else if (newMonth == 3){
    if (newDay == 1) {
        newDay=28 
        newMonth = newMonth - 1

    } else {
        newDay = newDay - 1
    }
}




    let zeroError = '0'
   if (newDay<10){

    newDay = zeroError + newDay.toString()
    
   }else{
    newDay = newDay.toString()
   }

   if (newMonth<10){

    newMonth = zeroError + newMonth.toString()
    
   }else{
    newMonth = newMonth.toString()
   }

   if (newYear<10){
     newYear = zeroError + newYear.toString()
   }else{
    newYear = newYear.toString()
   }
    let DDMMYY = newDay + newMonth + newYear 
   
    return DDMMYY 
} 




const checkPalindrome = () => {
    let date = Dob.value.replaceAll("-","")
    // console.log(typeof(date))
    // let Date = convertDatetoformat(date);
    // console.log((Date))
    // console.log(typeof(Date))
    // let check = chkReverse(Date)
    // console.log(check)


    // let NewDate = Date.split("")

    // let newDay = Number(NewDate.slice(0,2).join(""))
    // console.log(newDay)
    // newDay = newDay +1 
    // console.log(newDay)
    // newDay = newDay.toString()
    // console.log(newDay)
    // let newMonth = Number(NewDate.slice(2,4).join(""))
    // let newYear = Number(NewDate.slice(4,6).join(""))



    let Date1 = convertDatetoformat(date);
    let Date2 = convertDatetoformat(date);

    find1 = false;
    find2 = false;

    let count1 = 0
    let count2 = 0

    while(find1===false) {
    
    let check = chkReverse(Date1)
    if (check===false){
        count1 = count1 +1
        Date1 = decreaseDate(Date1)
    }else{
        find1=true
        
    }
    }
    while(find2===false) {
    
        let check = chkReverse(Date2)
        if (check===false){
            count2 = count2 +1
            Date2 = increaseDate(Date2)
        }else{
            find2=true
            
        }
        }
    
    if ((count1 == 0) || (count2==0)){
        Msg.innerHTML = `Congratulation your Birthday ${Date1} is a Palindrome`
        
    } else {
        Msg.innerHTML = `Sorry, Your birthday is not a palindrome in DDMMYY format. <p>The closest palindrome date before your Birthday is on ${Date1} and ${count1} day/days before.</p>
        <p>The closest Palindrome date after your Birthday is on ${Date2} and ${count2} day/days after.</p>`
    }
}

Btn.addEventListener("click", checkPalindrome);

