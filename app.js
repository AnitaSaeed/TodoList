function Add(){
    var i=1
   var task_bord=document.getElementById('task_bord')
   var row=document.createElement("div")
   row.className="row task_row"
   var col=document.createElement("div")
   col.className="col-md-10"
   var col2=document.createElement("div")
   col2.className="col-md-1"
   var text=document.createElement("p")
   text.className="text"
   text.innerText=document.getElementById('task').value

   task_bord.appendChild(row)
   row.appendChild(col)
   col.appendChild(text)
   row.appendChild(col2)

    var del=document.createElement("button")
    del.innerText="Delete"
    del.className="del btn"
    col2.appendChild(del)
    del.addEventListener("click",function(){
        var result=confirm("are you sure?")
        if(result== true){
          row.remove();
        }
        
        
      })


      text.addEventListener("click",function(){
          if(i==1){
            text.style="text-decoration: line-through; text-decoration-color:  white"
            i--;
          }
          else{
            text.style=""
            i++
          }
          
      })


}