import Image from "next/image";
import React, { ReactElement, useState } from "react";
import ReactCrop, {
  PixelCrop,
  type Crop,
  PercentCrop,
  centerCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface props {
  crop: Crop;
  onCropChange: (e:React.SyntheticEvent<HTMLImageElement, Event>)=>void;
  setCrop:(p:PercentCrop)=>void;
  aspect: number;
  imgurl: string;
}

export default function ImageCropper({
  crop,
  onCropChange,
  aspect,
  imgurl, setCrop
}: props) {
  const [completeCrop, setCropComplete] = useState<PixelCrop>();
  return (
    <ReactCrop
      onChange={(_, p) => setCrop(p)}
      onComplete={(c) => setCropComplete(c)}
      crop={crop}
      aspect={aspect}
      style={{
        position: "absolute",
        right: 0,
        width: 400,
        height: 300,
        margin: 30,
      }}
    >
      <Image src={imgurl} alt="" fill onLoad={(e)=>onCropChange(e)} />
    </ReactCrop>
  );
}
