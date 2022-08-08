const tt = document.getElementById("title")
const aut = document.getElementById("author")
const bd = document.getElementById('body')
const id = document.getElementById('numID')
const form = document.querySelector("form")

let data = {}
form.onsubmit = ()=>{
    // Submit data here
    data = {
        postNumber:id.value,
        author:aut.value,
        title:tt.value,
        body:bd.value
    }
}
// fetch('https://kasasira.herokuapp.com/posts',{
//     method:'post',
//     headers:{
//         'Content-Type':'application/json',
//     },
//     body: JSON.stringify(data)
// })
// .then((response)=>response.json())
// .then((data)=>{
//     console.log("successful ", data)
// })