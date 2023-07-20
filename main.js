
let tareas = [
  { tarea: "barrer", tiempo: 15 },
  { tarea: "trapear", tiempo: 15 },
  { tarea: "cocinar", tiempo: 30 },
];
function addwork(array,object){
  array.push(object)
}
addwork(tareas,{tarea: "dormir", tiempo: 60})
console.log(tareas[3])

tareas.forEach(indice =>{
  if(indice.tiempo <= 15){
    console.log(`el tiempo de la tarea ${indice.tarea}  sera poco`)
  }
  else{
    console.log(`la tarea ${indice.tarea} tomara mucho tiempo`)
  }
})
