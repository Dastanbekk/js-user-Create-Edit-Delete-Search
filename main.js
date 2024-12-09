// const hours = document.querySelector(".hour")
// const minutes = document.querySelector(".minutes")
// const second = document.querySelector(".secunds")


// function uiTime(){
//     let date = new Date();
//     hours.innerHTML = 
//     date.getHours() >= 10 ? date.getHours():"0"+ date.getHours();
//     minutes.innerHTML = 
//     date.getMinutes() >= 10 ? date.getMinutes():"0"+ date.getMinutes();
//     second.innerHTML = 
//     date.getSeconds() >= 10 ? date.getSeconds():"0"+ date.getSeconds();
// }

// setInterval(uiTime,1000)



// let arr1 = [false,true, "salom"];
// let arr2 = [1,2,3,4, ...arr1];
// console.log(...arr2)          arraydan chiqarish uchun oson usuli ...array-nomi


// let obj = {
//     name:"Doston",
//     age:"20",
//     Job:"Developer",
// };
// let obj2 = {...obj, phone:"+998973560109", lastName:"Zaripov"} obyektga qiymat qoshishning oson ususli
// console.log(obj2)

// function add(a,b,c, ...rest){
//     console.log(rest);
//     return a+b+c+rest.reduce((acc,value) =>(acc += value), 0)
// }
// console.log(add(...[1,2,3,4,5,6,7,8]));


// let {x,y,z} ={
//     x:12,
//     y:12,
//     z:12,
// }
// console.log(x,y,z)


// let [first,second, ...rest] = [12,13,14,15]
// console.log(first, second, rest);





// let person = {
//     name:"Doston",
//     lastName:"Zaripov",
//     age:20,
//     isMarried:true,
//     location:{
//         city:"Toshkent",
//     },
// }
// // Shallow copy

// let person2 = JSON.parse(JSON.stringify(person));
// // console.log(person2)

// person2.name = "Orifjon";
// person2.lastName = "Komilov"
// person2.location.city = "Beruniy";
// person2.isMarried = false;
// person2.age = 5;
// // console.log(person2)
// console.log(person)
// console.log(person2)











var n17 = [
    {
        id:1,
        name:"Doston",
        lastName:"Zaripov",
        coin:"1200",
    },
    {
        id:2,
        name:"Akobir",
        lastName:"Zaripov",
        coin:"1200",
    },
    {
        id:3,
        name:"Temur",
        lastName:"Zaripov",
        coin:"1200",
    },
    {
        id:4,
        name:"Farxod",
        lastName:"Farxodov",
        coin:"1200",
    }
];


// Edit

// function editPassword(userId,userPassword){
//     let newArr = n17.map((value)=>{
//         return value.id == userId ? [...value.password = userPassword]: value
//     })
//     return n17
// }
// console.log(editPassword(2,"123123"))




// Create
// function createUser(name,lastName){
//     let newUserObj = {
//         id: n17.length + 1,
//         name,
//         lastName,
//         coin:"0",
//     }
    
//     n17 = [...n17, newUserObj]
//     return n17
// }

// console.log(createUser("Avazbek","avazbek123"));
// console.log(createUser("Ali","ali123"));


// Delete
// function deleteUser(userName,userLast){
//     newArr = n17.filter((value)=>{
//         return value.name == userName && value.lastName == userLast   
//     })
//     return newArr
// }

// console.log(deleteUser("Doston","Zaripov"))