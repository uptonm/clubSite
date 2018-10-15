import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import ContactField from './ContactField'

class ContactForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div className="container">
                <h1 className="display-2" style={{ paddingTop: '20px' }}>Edit Profile</h1>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <ContactField name='first' label='First Name' type='input' />
                        </div>
                        <div className="col">
                            <ContactField name='last' label='Last Name' type='input' />
                        </div>
                    </div>
                    <ContactField name='email' label='Email' type='email' />
                    {/* <div className="row">
                        <div className="col-1">
                            <label htmlFor='sex'>Sex:</label>
                            <ContactField id='sex' name='sex' label='Male' type='radio' value='male' />
                            <ContactField id='sex' name='sex' label='Female' type='radio' value='female' />
                        </div>
                        <div className="col">
                            <ContactField name='color' label='Favorite Color' type='select' value={[{ name: 'Choose a color', value: 'null' }, { name: 'Red', value: 'ff0000' }, { name: 'Green', value: '00ff00' }, { name: 'Blue', value: '0000ff' }]} />
                        </div>
                        <div className="col">
                            <ContactField name='game' label='Favorite Game' type='select' value={[{ name: 'Choose a game', value: 'null' }, { name: 'Dota/LoL', value: 'dota-LoL' }, { name: 'CS:GO', value: 'cs-go' }, { name: 'PUBG', value: 'pubg' }]} />
                        </div>
                    </div> */}
                    <ContactField name='bio' label='Bio' type='textarea' />
                    <div className='text-center'>
                        <button type="submit" disabled={pristine || submitting} className='btn btn-large btn-primary' style={{ marginRight: '5px' }}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-large btn-cancel' style={{ marginLeft: '5px' }}>Clear Values</button>
                    </div>
                </form>
            </div>
        )
    }
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)

export default ContactForm;