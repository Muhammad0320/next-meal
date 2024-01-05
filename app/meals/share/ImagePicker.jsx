"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState("");

  const imageRef = useRef();

  const handleClick = () => {
    imageRef.current?.click();
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);

      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  console.log(pickedImage);

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label} </label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p> No image picked yet!</p>}

          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>

        <input
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          id={name}
          onChange={handleChangeImage}
          ref={imageRef}
          className={classes.input}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          {" "}
          Pick an Image{" "}
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
