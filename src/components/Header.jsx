import {useNavigation} from 'react'

function Header() {


    const addContact = (event) => {
        event.preventDefault();
        console.log("pressed add contact");
    }
  return (
    <div><h1>Contact APP</h1>
        <button onClick={(e) => addContact(e)}>Add Contact</button>
    </div>
  )
}

export default Header