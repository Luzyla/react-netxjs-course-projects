import {useRef} from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      addresss: enteredAddress,
      description: enteredDescription,
    };
    
    props.onAddMetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title' className={classes.form}>
            Meetup Title
            <input type='text' required id='title' ref={titleInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor='image' className={classes.form}>
            Meetup Image
            <input type='url' required id='image' ref={imageInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor='address' className={classes.form}>
            Address
            <input type='text' required id='address' ref={addressInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor='description' className={classes.form}>
            Description
            <textarea
              id='description'
              required
              rows='5'
              ref={descriptionInputRef}
            ></textarea>
          </label>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
