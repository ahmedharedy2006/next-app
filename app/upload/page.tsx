'use client'
import { CldUploadWidget } from 'next-cloudinary'
import React from 'react'

const UploadPage = () => {
  return (
    <CldUploadWidget 
    options={{
        sources: ['local']
    }}
    uploadPreset='test2006'>
        {({open}) => <button onClick={() => open()} className='btn btn-primary'>Upload</button>}
    </CldUploadWidget>
  )
}

export default UploadPage