import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['sakib', ' shorifulraj', 'jasim',
   'rubel', 'shalman shah']

   const singers = [
{
id:1, name :'rohoman', age: 68 
},

{
 id:2, name :'asif', age: 10 },

{
 id:3, name :'eva rohoman', age: 55 },


    {
     id:4, name :'dev', age: 70 },

   ]

  return (
    <>

      <h1>Vite + react</h1>

{
singers.map(singer => <Singer singer={singer}></Singer>)

}

      <Actor name={"bappa raj"}></Actor>
      { 

      actors.map(actor => <Actor name={actor}></Actor>)

      }

      {/* <Todo
       task="tearn react" 
       isDone={true}></Todo>
      <Todo
       task="core concept"
        isDone={false}></Todo>
      <Todo
       task="try js" 
       isDone={true}></Todo> */}


      {/* <Person></Person>
     <Student grade= "7" score= "99"></Student>
     <Student grade={12} score='95'></Student>
     <Student></Student>
     <Developer></Developer>
     <Device name = "laptop" price ="30000" ></Device>
     <Device name = "mobile" price ="9000" ></Device>
     <Device name = "watch" price ="5000" ></Device> */}
    </>
  )


}


function Device(prop) {
  // console.log(prop)
  return <h2>this device : {prop.name} price:{prop.price}</h2>

}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 }
  return <h3>i am {person.name} prason with age: {age + money}</h3>

}

const { grade, score } = { grade: '7', score: '99' }
// console.log(grade, score)

function Student({ grade = 0, score = 0 }) {
  console.log(grade, score);

  return (
    <div className='student'>
      <h3>this a student</h3>
      <p>class: {grade} </p>
      <p>score : {score}</p>
    </div>)

}

function Developer() {

  const developrestyle = {

    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developrestyle}>
      <h5>devo devo</h5>
      <p>coding</p>
    </div>

  )

}


export default App
