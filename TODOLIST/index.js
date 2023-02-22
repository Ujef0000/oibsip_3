function validate()
{
      var taskname = document.getElementById('taskname').value
      var tododiv = document.getElementById('mytodo')

      var newtodoitem = document.createElement('div')

            var todoname = document.createElement('li')
         todoname.innerHTML = taskname
         var deletebtn=document.createElement('i')
         deletebtn.classList.add('fa-solid')
         deletebtn.classList.add('fa-circle-minus')
        

         newtodoitem.appendChild(todoname)
         newtodoitem.appendChild(deletebtn) //append for newtodoitem

        tododiv.appendChild(newtodoitem)   
        console.log("hi")
            
}
// function validate(){

//       console.log("hi")
// }

var tododiv =document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e){
      const element=e.target
      if(element.classList[0]=='fa-solid')
      {
            element.parentElement.remove();
      }
}