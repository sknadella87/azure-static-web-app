
import React, {useState,useEffect} from 'react'
import Hero from '../components/Hero'
import FormSection from '../components/FormSection'
import FileUploadSection from '../components/FileUploadSection'
import CommunicationSection from '../components/CommunicationSection'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'
import Sticky from '../components/Sticky'
import Link from 'next/link'


export default function Home() {
  

  return (

    <div>
      <Hero title="Add/Replace Input Data">Follow the steps to upload the input file and fill out information to initiate your file submission. Once your file is reviewed and approved, the input will be actively available for download!</Hero>
      <div className="gap grid grid-cols-[80%_20%] max-w-screen-lg m-auto pt-[80px] pb-[16px]">
       <div>
  
      <h3 className="uppercase mb-12" id="1">Getting Started</h3>
     
        <div className="max-w-screen-lg m-auto mb-4 justify-end gap-4">
            <FileUploadSection />
        </div>
        <div class="thin-border mb-4 mt-6" />
        <h3 className="uppercase mb-4" id="2">Basic Information</h3>
        <div className="max-w-screen-lg m-auto mb-12 justify-end gap-4">
            <FormSection />
        </div>
      
        <div class="thin-border mb-4 mt-6" />
        <h3 className="uppercase mb-4" id="3">Communication</h3>
        <div className="max-w-screen-lg m-auto mb-12 justify-end gap-4">
            <CommunicationSection />
        </div>

        
        <div className="flex justify-end items-baseline">
        <Link href="./" className="mr-auto underline text-magneta-primary">Cancel File Upload</Link>
        <Button >Submit for Review</Button>
        <SecondaryButton className="ml-[20px]">Save Progress</SecondaryButton>
      </div>
      </div>
      <div>
      <Sticky className="top-4"/>
      </div>
    </div>
    </div>
  )
}
