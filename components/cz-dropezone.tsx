import Image from 'next/image';
import React from 'react'
import Dropzone, { Accept, DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const Container = styled.div`
background-color:red;
position:absolute;
display:grid;
`
interface props {
  onDropFile:
    | (<T extends File>(
        acceptedFiles: T[],
        fileRejections: FileRejection[],
        event: DropEvent
      ) => void)
    | undefined;
    accept?:Accept;
    previewImage?:string
}

export default function DropeZone({onDropFile, accept,previewImage}:props) {
  const {getInputProps, getRootProps, isDragActive} = useDropzone({onDrop:onDropFile, accept:accept})
  return (
    <Container {...getRootProps({style:{height:200, width:200, border:2, borderRadius:'50%', overflow:'hidden', opacity:(isDragActive || previewImage)?1:0.5}})}>
      <input {...getInputProps({multiple:false})}/>
      {previewImage?.length? <Image src={previewImage} alt='' style={{position:'absolute', overflow:'hidden'}} fill/>:null}
      <p style={{textAlign:'center', justifyContent:'center'}}>drag or browse </p>
    </Container>
  );
}
