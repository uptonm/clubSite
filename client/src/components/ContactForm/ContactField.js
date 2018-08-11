import React from 'react'
import { Field } from 'redux-form'

const ContactField = ({ name, label, type, value }) => {
    if (type === 'input' || type === 'email') {
        return (
            <div className='form-group'>
                <label htmlFor={name}>{label}</label>
                <Field id={name} name={name} component="input" type={type} placeholder={label} className='form-control' />
            </div>
        )
    }
    else if (type === 'radio') {
        return (
            <div className="form-check">
                <Field className="form-check-input" component='input' type="radio" name={name} id={value} value={value} />
                <label className="form-check-label" htmlFor={value}>
                    {label}
                </label>
            </div>
        )
    }
    else if (type === 'select') {
        function renderOptions() {
            return value.map(option => {
                return <option key={option.value} value={option.value}>{option.name}</option>
            })
        }

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <Field name={name} component='select' className="form-control" id={name}>
                    {renderOptions()}
                </Field>
            </div>
        )
    }
    else if (type === 'textarea') {
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <Field name={name} component={type} className='form-control' id={name} />
            </div>
        )
    }
}

export default ContactField