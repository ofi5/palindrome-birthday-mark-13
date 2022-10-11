const Dob = document.querySelector("#dob");
const Btn = document.querySelector('#btn');
const Msg = document.querySelector("#msg")




const convertDatetoformat= (Date) => {
    let Dae = Date.split("")
    let year = Dae.slice(4,8)
    let month = Dae.slice(2,4)
    let day= Dae.slice(0,2)
    let DDMMYYYY = (day.join("") + month.join("") + year.join(""))
   let DDMMYY = day.join("") + month.join("") + year.slice(2,4).join("") 
   let MMDDYY = month.join("") + day.join("") + year.slice(2,4).join("") 
  

   let dateformats = [DDMMYYYY, DDMMYY, MMDDYY]
   
   return dateformats
   }








const chkReverse = (data) => {
    let Palindrome = false;
    
    for (let i=0;i<data.length;i++){        
        
    let dataArray = data[i].split("")
    
   let revArray = dataArray.reverse()
    let rev = revArray.join("")
    

   if (rev === data[i]){
        Palindrome = true
        final = data[i]
     
        if (i==0){
            format = "DDMMYYYY"
        }else if (i==1){
            format = "DDMMYY"
        }else if (i==2){
            format = "MMDDYY"
        }

        break
   
}

}
return Palindrome
}









const increaseDate=(date) => {


    let NewDate = date.split("")
    
    let newDay = Number(NewDate.slice(0,2).join(""))
    
    let newMonth = Number(NewDate.slice(2,4).join(""))
    let newYear = Number(NewDate.slice(4,8).join(""))




if (newYear%4 == 0 && newYear%100 !=0 && newMonth == 2 && newDay==28){
    newDay = 29

} else if ((newMonth == 12) && (newDay == 31)){
        newYear=newYear +1
        newMonth=1
        newDay=1
 
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

   
    newYear = newYear.toString()
   
    let DDMMYYYY = newDay + newMonth + newYear 
    
    return DDMMYYYY 
}










const decreaseDate=(date) => {


    let NewDate = date.split("")
    
    let newDay = Number(NewDate.slice(0,2).join(""))
    
    let newMonth = Number(NewDate.slice(2,4).join(""))
    let newYear = Number(NewDate.slice(4,8).join(""))

    if (newYear%4==0 && newYear%100!=0 && newMonth==3 && newDay==1){
    newDay = 29
    newMonth = 2

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

   
    newYear = newYear.toString()
   
    let DDMMYYYY = newDay + newMonth + newYear 
   
    return DDMMYYYY 
}









const checkPalindrome = () => {
    if (Dob.value){
        let date = Dob.value.replaceAll("-","")
        let Dae = date.split("")
    let year = Dae.slice(0,4)
    let month = Dae.slice(4,6)
    let day= Dae.slice(6,8)
    let DDMMYYYY = (day.join("") + month.join("") + year.join(""))
    

    
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



    let Date1 = convertDatetoformat(DDMMYYYY);
   
    let Date2 = convertDatetoformat(DDMMYYYY);

    find1 = false;
    find2 = false;

    let count1 = 0
    let count2 = 0

    while(find1===false) {
        
    let check = chkReverse(Date1)
    
    if (check===false){
        count1 = count1 +1
        Date1 = increaseDate(Date1[0])
        Date1 = convertDatetoformat(Date1)
    }else{
        find1=true
        Date1 = final
        format1 = format
    }
    }

    while(find2===false) {
    
        let check = chkReverse(Date2)
        if (check===false){
            count2 = count2 +1
            Date2 = decreaseDate(Date2[0])
            Date2 = convertDatetoformat(Date2)
        }else{
            find2=true
            Date2 = final
            format2 = format 
        }
        }
    
    if ((count1 == 0) || (count2==0)){
        Msg.innerHTML = `🎉🎉🎉🎉🎉Congratulation your Birthday ${Date1} (${format1}) is a Palindrome 🎉🎉🎉🎉🎉`
        
    } else {
        Msg.innerHTML = `Sorry, Your birthday is not a palindrome. <p>The closest palindrome date before your Birthday is on ${Date2}(${format2}) and ${count2} day/days before.</p>
         <p>The closest Palindrome date after your Birthday is on ${Date1}(${format1}) and ${count1} day/days after.</p>`
    }
}
    else {
        Msg.innerHTML = "Enter Date"
    }

}



Btn.addEventListener("click", checkPalindrome)