import React from 'react'
import ContactForm from './ContactForm';

const ContactWrapper = (props) => {
    return (
        <ContactForm onSubmit={props.showResults} id={props.id}/>
    )
}

export default ContactWrapper