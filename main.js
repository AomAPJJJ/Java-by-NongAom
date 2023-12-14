import {
  // addTodoHandler,
  beforeUnloadHandler,
  loadHandler
} from './eventHandler/eventController.js'

// window.addEventListener('load', () => {
 
// })
// window.addEventListener('beforeunload', (event) => {

// })

// const addButton = document.getElementById('addBtn')
// addButton.addEventListener('click', () => addTodoHandler())

// const inputTodo = document.querySelector('input')
// inputTodo.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter') addTodoHandler()
// })


const divCount = document.getElementById('count') //ซ้ายเอาเข้าไปในขวา



const newPlus = document.createElement('button')
    newPlus.textContent = '+'
    divCount.appendChild(newPlus)
    newPlus.addEventListener('click', () => {
      const sum = document.getElementById('number').innerText
      const value =  parseInt(sum) + 1

      document.getElementById('number').innerText = value;

      
      localStorage.setItem('numbers', value)
      localStorage.getItem('numbers')

    })

    
const newNumber = document.createElement('p')
newNumber.id = 'number'
newNumber.textContent =  localStorage.getItem('numbers') === 'NaN' || localStorage.getItem('numbers') === null || localStorage.getItem('numbers') === undefined ? 0 : localStorage.getItem('numbers') 
divCount.appendChild(newNumber)


const newMinus = document.createElement('button')
newMinus.textContent = '-'
divCount.appendChild(newMinus)

newMinus.addEventListener('click', () => {
  const sum = document.getElementById('number').innerText
  const value =  parseInt(sum) - 1
  document.getElementById('number').innerText = value;
  localStorage.setItem('numbers', value)
  localStorage.getItem('numbers')

})




