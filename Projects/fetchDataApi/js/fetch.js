// Getting data from the given api
// const h1 = document.querySelector('h1')
// const h3 = document.querySelector('h3')
fetch('https://kasasira.herokuapp.com/posts')
.then((response)=>{
    return response.json()
    })
    .then((data)=>{
        for(let items of data){
            const h1 = document.createElement('h1')
            const h4 = document.createElement('h3')
            const p = document.createElement('p')
            
            h1.innerHTML = items.title
            h4.innerHTML = items.h3
            p.innerHTML = items.body

            document.body.appendChild(h1)
            document.body.appendChild(h4)
            document.body.appendChild(p)
        }
    })
    .catch((error)=>console.log("There is an error in the fetch method"))
