import classes from "./ImagePicker.module.css";

function ImagePicker({ label, name }) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label} </label>

      <div className={classes.controls}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          id={name}
        />
        <button className={classes.button} type="button">
          {" "}
          Pick an Image{" "}
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
