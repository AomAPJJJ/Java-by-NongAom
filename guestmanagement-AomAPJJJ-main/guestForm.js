//65130500050 Panipak Jongsirivanich

import { createGuestList } from './data/guestdata.js'
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
   const searchGuests = document.getElementById('search-input')
   searchGuests.addEventListener('keyup',(event)=> {searchGuest(event)})
    const add = document.getElementById('add-guest-btn')
    add.addEventListener('click', addGuest)

   
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {

    const displayArea = document.getElementById("display-area")
    
    const divNaja = document.createElement('div')
  
    const span1 = document.createElement('span')
    span1.innerHTML = guestItem.firstname + ' ' + guestItem.lastname
    
    const span2 = document.createElement('span')
    span2.className = "remove-icon"
    span2.id = guestItem.firstname + ' ' + guestItem.lastname
    span2.style = "cursor:pointer;color:red"
    span2.innerHTML = '[X]';
    span2.addEventListener('click' , removeGuest)


    displayArea.appendChild(divNaja) 
    divNaja.appendChild(span1)
    divNaja.appendChild(span2)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {

   guestResult.forEach(element => {
     displayGuest(element)
   });

  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
   
  const displayArea = document.getElementById("display-area")

  displayArea.replaceChildren()


  displayGuests(guests.searchGuests(event.target.value))
  
  }

  // 5. Function to add a new guest
  function addGuest() {

    const firstname = document.getElementById('firstname-input').value 

    const lastname = document.getElementById('lastname-input').value 

    const displayArea = document.getElementById("display-area")

    displayArea.replaceChildren()

    

    displayGuests(guests.addNewGuest(firstname,lastname))

    document.getElementById('firstname-input').value = ''

    document.getElementById('lastname-input').value = ''
   
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
  
    const displayArea = document.getElementById("display-area")

    displayArea.replaceChildren()

    guests.removeGuest({
      firstname: event.target.parentElement.children[0].textContent.split(' ')[0],
      lastname : event.target.parentElement.children[0].textContent.split(' ')[1]

    })

    displayGuests(guests.searchGuests(document.getElementById('search-input').value))
  
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
//module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
