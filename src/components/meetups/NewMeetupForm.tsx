import React, { FormEvent, useRef } from "react"
import { Card } from "../ui/Card"
import classes from "./NewMeetupForm.module.css"
import { Meetup } from "../../interfaces/Meetup.interface"

interface Props {
  onAddMeetup: (meetupData: Meetup) => void;
}

interface MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;
}

export const NewMeetupForm:React.FC<Props> = (props) => {

  const titleInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const addressInputRef = useRef<HTMLInputElement>(null)
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    // console.log(event.target.title.value);
    
    const enteredTitle = titleInputRef.current!.value;// non-null assertion operator: tells TS that treat this as non-null value even if TS thinks it's null
    const enteredImage = imageInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;

    const meetupData: MeetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData);

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Meetup title</label>
            <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Meetup image</label>
            <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="adress">Meetup adress</label>
            <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Meetup description</label>
            <textarea id="description" required rows={5} ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
