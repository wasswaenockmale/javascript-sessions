const tt = document.getElementById("title")
const aut = document.getElementById("author")
const bd = document.getElementById('body')
const id = document.getElementById('numID')
// const form = document.querySelector("form")
let data = {}
const post = document.getElementById("post")
post.addEventListener('click',(event)=>{
    event.preventDefault()
    data["postNumber"] = id.value
    data["title"] = tt.value
    data["author"] = aut.value 
    data["body"] = bd.value
    console.log(data)

    // Using the fetch api to push and retrieve data from a given website.
    fetch('https://kasasira.herokuapp.com/posts',{
        method:'post',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    })
    .then((response)=>{
        response.json()
        console.log(response)
    })
    .then((data)=>{
        console.log("successful ", data)
    })
    .catch((error)=>console.error("This is an error"))
})