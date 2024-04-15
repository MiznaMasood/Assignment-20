
// Chap 31-34(Date Method)

// Q1

// var  dateTime = new Date();

// document.write(dateTime)

// Q2


// var  dateTime = new Date();
//  var currentMonth  = dateTime.getMonth()


// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// alert("Current month: " + monthNames[currentMonth])

// // Q3

// var DayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

// var  dateTime = new Date();

//  var day  = dateTime.getDay()

// alert("Today is " + DayNames[day])

// // Q4

// // var today = new Date();

// // var dayOfWeek = today.getDay();

// // if(dayOfWeek === 6 || dayOfWeek === 0){
// //     console.log("It's Fun day");
// // } else{
// //     console.log("It's not Fun Day :( Enjoy your day!");
// // }

// // Q5
// var today = new Date();

// var date = today.getDate();

// if(date <= 15){
//     console.log("First fifteen days of month");
// } else{
//   console.log("last days of month")
// }



// // Q6
// var todayDate1 = new Date()

// document.write ("<br>" +  todayDate1)

// var todayDate2 = new Date()

// var milliseconds2 = todayDate2.getTime()

// document.write("<br> Milliseconds since midnight, Jan. 1, 1970:", milliseconds2)


// var todayDate = new Date()

// var milliseconds = todayDate.getTime()


// var minutes = milliseconds/(1000 * 60)

// document.write("<br> Minutes since midnight, Jan. 1, 1970:", minutes)

// // Q7

// var time = new Date()
// var currentHour = time.getHours()

// if(currentHour < 12){
//   alert("It's Am")
// }else{
//   alert("It's PM")
// }

// Q8

// var date = new Date("December 31, 2023")

// document.write("Later date: " + date)

// Q9

// var currentDate = new Date()
// var ramadan = new Date("June 18, 2015")

// var result = currentDate.getTime() - ramadan.getTime()

// var daysPassed = Math.floor(result / (1000 * 60 * 60 * 24));

// document.write(daysPassed + " days have passed since 1st Ramadan, 2015 ")


// Q10

// var dateObject = new Date()

// var hour = dateObject.getHours()

// var result = dateObject.getHours(hour + 1);

// document.write("current date : " + dateObject + "<br> 1 hour ago, it was Sun April 14 2024 " + result )



// Q13

// var age = +prompt("Enter your age ");

// var birthDate = new Date().getFullYear();

// var birthYear = birthDate - parseInt(age);

// document.write("Your age is " + age + "<br> your birth year is " + birthYear )



// Q14




// ________________________

// Chap 31-34

// Q1

// var dObj = new Date();

// // Q2

// var dStr = new Date().toString();


// // Q3

// var d = new Date();
// var day = d.getDay();


// // Q4
// var d = 0

// var dayNames = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// alert("Today is " + dayNames[d]);

// Q5

// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth()
// var day = currentDate.getDate()
// var dayOfWeek = currentDate.getDay()
// var hour = currentDate.getHours()
// var minutes = currentDate.getMinutes()
// var seconds = currentDate.getSeconds()
// var milliseconds = currentDate.getMilliseconds()


// Q6

// var later = new Date("December 31, 2020");



// // Q7

// var secondDay = new Date("Febuary 1, 1992")

// document.write(secondDay)



// // Q8

// alert(new Date(1980, 0, 1).getTime());


// Q9

var date = new Date()

var result = date.setFullYear("2025");

document.write(result)

// ____________________

















