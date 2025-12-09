
// 1
// console.log("Before");
// setTimeout(() => {
//     console.log("Asynchronous JS");
// },5000);
// console.log("After");

// 2
// async function fetchApi(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const ans = await response.json();
//     console.log(ans);
// }
// fetchApi();

// 3
// import axios from 'axios';
// async function fetchApi(){
//     const response = await axios("https://jsonplaceholder.typicode.com/users");
//     console.log("The user:", response);
// }
// fetchApi();

// 4
// import axios from 'axios';
// async function fetchApi(){
//     try{
//         const response = await axios("https://jsonplaceholder.typicode.com/users")
//         console.log("The User : " , response)
//     }
//     catch(e){
//         console.log("Error",e);
//     }
// }
// fetchApi();


// Fetching Multiple API's
// 5
async function fetchMultipleApis(){
    let urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://dummyjson.com/products",
        "https://dummyjson.com/todos",
        "https://dummyjson.com/users"
    ]
    let promises = urls.map( (item) => fetch(item).then(res => (res.json()))); // urls.map(...) = transforms each element of an array and returns a new array.
    let data = await Promise.all(promises);
    console.log("The data is Printed : " , data);
}
fetchMultipleApis();