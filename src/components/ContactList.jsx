import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';

function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
       const url = "https://contactsflask-tomtarpey.b4a.run/contacts";
  
      fetch(url)
      .then(response => response.json())
      .then(data => setContacts(data))
  
    }, [])
  
  
    return (
      <>
        <div>
          { contacts.map(contact => (
            <ContactCard key={contact.id} contact={contact}/>
          )) }       
        </div>
      </>
    )
}

export default ContactList