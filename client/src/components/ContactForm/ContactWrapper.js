import React, { Component } from 'react'
import ContactForm from './ContactForm';
import showResults from './actions/showResults'

class ContactWrapper extends Component {
    render() {
        return (
            <ContactForm onSubmit={showResults} />
        )
    }
}

export default ContactWrapper