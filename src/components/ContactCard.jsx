import React from 'react'

function ContactCard({contact}) {
  return (
    <div key={contact.id} className="contactCard">
        <h1>{contact.firstName} {contact.lastName}</h1>
        <p>{contact.email}</p>
    </div>
  )
}

export default ContactCard;