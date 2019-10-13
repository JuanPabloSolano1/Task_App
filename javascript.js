let button = document.getElementById("button")
let input = document.querySelector("#input_form")
let tasks = document.getElementById("tasks")
button.addEventListener("click",(event) =>{
  event.preventDefault()
  tasks.insertAdjacentHTML("beforeend",

  `
  <div align="center">
  <div class="result">
   <ul>
   <li>${input.value}</li>
   </ul>
   <button class="deletec"><i class="fa fa-trash"></i></i></button>
   </div>
   </div>
   `
)
let remove = document.querySelectorAll(".deletec")
let result = document.querySelectorAll(".result")
remove.forEach(items =>{
  items.addEventListener("click",(event)=>{
     result.forEach(element =>{
       element.addEventListener("click",(event)=>{
         element.parentNode.removeChild(element)
      })
     })
   })
  })
})
