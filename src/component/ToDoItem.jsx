import React from "react"

function ToDoItem(props){

  return(
    <div onClick={()=>
    {
      props.check(props.id)}
    }>
    <li>{props.value}</li>
   </div>
  )
}
export default ToDoItem;