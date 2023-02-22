
import { Checkbox, Radio } from 'pretty-checkbox-react';
import useFileUpload from 'react-use-file-upload';
import React, { useRef } from 'react';
import Image from 'next/image'
const FileUpload = () => {
    const {
        files,
        fileNames,
        fileTypes,
        totalSize,
        totalSizeInBytes,
        handleDragDropEvent,
        clearAllFiles,
        createFormData,
        setFiles,
        removeFile,
      } = useFileUpload();
    
      const inputRef = useRef();
    
    return(
        <section className="w-3/4 m-auto">
         <p className="mb-1 font-bold">Honor Statement<span className="text-red-primary">*</span></p>
         <Checkbox className="flex items-baseline gap-2 mb-6">I hereby certify that this information has been reviewed by all necessary parties prior to uploading on this platform. The data has gone through all pre-determined data validation criteria defined by the data source group.</Checkbox>
        <p className="mb-1 font-bold">File Upload<span className="text-red-primary">*</span></p>
        <p className="mb-6">Once submission is complete, the uploaded file below will go through a data quality check. If the file does not pass, the results will be available on its File Detail Page that is created.</p>

        <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <span>{name}</span>

                <span onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </span>
              </li>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>

              <li className="clear-all">
                <button onClick={() => clearAllFiles()}>Clear All</button>
              </li>
            </ul>
         )}
         <div className="bg-white shadow-[0px_4px_8px_rgba(0,0,0,0.25)] p-12 text-center w-3/4 m-auto flex items-center flex-col" 
          
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, 'a');
          }}
        >   
             <Image
                data-cy="chevron logo"
                src={'../../icons/chevron.svg'}
                alt="VG Logo"
                width={20}
                height={20}
                className="cursor-pointer "
        />

          <button onClick={() => inputRef.current.click()}>Drag file here or click to browse computer</button>

          {/* Hide the crappy looking default HTML input */}
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => {
              setFiles(e, 'a');
              inputRef.current.value = null;
            }}
          />
        </div>
        <p className="mt-8 font-bold">Is this a new file or replacing an existing file?<span className="text-red-primary">*</span>
        </p>
        <div className="flex gap-4 ">
        <Radio className="flex gap-4">New </Radio>
        <Radio className="flex gap-4">Replacing an existing</Radio>
        </div>
        </section>
    ) 
}
export default FileUpload
