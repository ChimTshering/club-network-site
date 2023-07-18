import { PixelCrop } from "react-image-crop";

export const getCroppedImg = async (imageSrc:string, croppedAreaPixels:PixelCrop) => {
  const image = new Image();
  image.src = imageSrc;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = croppedAreaPixels.width;
  canvas.height = croppedAreaPixels.height;

  await new Promise((resolve, reject) => {
    image.onload = () => {
    const newImage = ctx && ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
      resolve(newImage);
    };

    image.onerror = (error) => {
      reject(error);
    };
  });

  const croppedImageSrc = canvas.toDataURL("image/jpeg");

  return croppedImageSrc;
};
