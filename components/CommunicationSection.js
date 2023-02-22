import { useState, version } from 'react'
import Input from './Input'

const FormSection = ()=>{
    const [fields, setFields]= useState({
        fileName: '',
        fullName:'',
        email:'',
        fileType:'',
        calendar:'',
        version:'',
        notes:'',

    });

    const handleChange = (event) => setFields(fields => ({
        ...fields,
        [event.target.name]: event.target.value
    }))

    return (
        <section className="w-3/4 m-auto">
                <h5 className="font-bold mb-4">Assigned Reviewer <span className="text-red-primary">*</span></h5>
            <Input 
                label="Full Name" 
                value={fields.fullName} 
                name="full name" 
                placeholder="Your filename" 
                onChange={handleChange} />
        
        
           <Input 
                label="Email" 
                value={fields.email} 
                name="Email" 
                placeholder="First Last" 
                onChange={handleChange} 
            />
            <h5 className="font-bold my-4">Assigned Recipient(s) <span className="text-gray-primary">optional</span></h5>
            <Input 
                label="Email" 
                value={fields.email} 
                name="Email" 
                placeholder="Email" 
                onChange={handleChange} 
            />
 
            <Input 
                label="Additional Notes" 
                type="textarea"
                value={fields.notes} 
                name="notes" 
                placeholder="Notes" 
                onChange={handleChange} 
            />


            
         
        </section>
        
    )
}
export default FormSection