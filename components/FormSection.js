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
        source:'',
        model:'',
        program:'Select'

    });

    const handleChange = (event) => setFields(fields => ({
        ...fields,
        [event.target.name]: event.target.value
    }))

    return (
          
        <section className="w-3/4 m-auto">
            
            <Input 
                label="File name" 
                value={fields.fileName} 
                name="fileName" 
                placeholder="Your filename" 
                onChange={handleChange}
                className="mb-4" />
          <div className="flex gap-4">
          <div className="grow">
          <Input 
                label="File Type" 
                value={fields.fileType} 
                name="fileType" 
                placeholder="cvs" 
                onChange={handleChange} 
                className="mb-4"
            />
            </div>
            <div className="grow">
              <Input 
                label="Date" 
                value={fields.date} 
                name="Date" 
                placeholder="Date" 
                onChange={handleChange} 
                className="mb-4"

            />

            </div>
            <div className="grow ">
              <Input 
                label="Version" 
                value={fields.version} 
                name="version" 
                placeholder="1" 
                onChange={handleChange} 
                className="gap-2"
            />
          </div>
          </div>    
            <h5 className="font-bold my-4">Submitted By <span className="text-red-primary">*</span></h5>
           <Input 
                label="Full Name" 
                value={fields.source} 
                name="Full name" 
                placeholder="First Last" 
                onChange={handleChange} 
            
            />
            <Input 
                label="Email" 
                value={fields.email} 
                name="email" 
                placeholder="firstname.lastname@virgingalactic.com" 
                onChange={handleChange}
                className="mb-4" 
         
            />

            <Input 
                type="dropdown"
                label="Data Source" 
                value={fields.source} 
                name="Data Source" 
                placeholder="Select" 
                onChange={handleChange} 
           
            />
            <Input 
                type="dropdown"
                label="Loads Model" 
                value={fields.model} 
                name="loads model" 
                placeholder="Select" 
                onChange={handleChange} 
        
            />
              <Input 
                type="dropdown"
                label="Program" 
                value={fields.program} 
                name="Program" 
                placeholder={"Select"} 
                onChange={handleChange} 
           
            />
       
        </section>
        
    )
}
export default FormSection