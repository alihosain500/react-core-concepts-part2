// export default function Todo({task, isDone}){

//     return(
// <li>Task: {task}</li>

//     )
// }
// export default function Todo({ task, isDone }) {

//     if(isDone=== true){
//      return<li>finished : {task}</li>   
//     }
//     else{
//         <li>work one: {task}</li>
//     }
   
// }


// export default function Todo({ task, isDone }) {

//     if(isDone=== true){
//      return<li>finished : {task}</li>   
//     }
//     else{
//       return  <li>work one: {task}</li>
//     }
   
// }


// export default function Todo({ task, isDone }) {

//     if(isDone){
//         return<li>finished : {task}</li>
//     }
//     return<li>work on : {task}</li>
   
   
// }

// conditional rendering 3:ternary
// export default function Todo({ task, isDone }) {

//     return(

//         <li> {isDone? 'finished' : 'work on'}:
//         {task}</li>
//     )
    
// }


// conditional rendering 4:&&
// export default function Todo({task, isDone}){

//     return(
// <li>{task}{isDone && ':Done'}</li>

//     )
// }

// conditional rendering 5:||
// export default function Todo({task, isDone}){

//     return(
// <li>{task}{isDone || ':Done it'}</li>

//     )
// }

// conditional rendering 6:

export default function Todo({ task, isDone }) {
let listitem;
    if(isDone){
        listitem = <li>finished : {task}</li>
    }
    else{

      listitem = <li>work on : {task}</li>
    }
    return listitem;
}




