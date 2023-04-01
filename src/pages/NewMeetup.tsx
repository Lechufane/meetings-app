import React from "react"
import { useHistory } from "react-router-dom"
import { NewMeetupForm } from "../components/meetups/NewMeetupForm"
import { Meetup } from "../interfaces/Meetup.interface"


export const NewMeetupPage:React.FC = () => {

  const history = useHistory();

  const addMeetupHandler = (meetupData:Meetup) => {
    fetch('https://react-example-6e29a-default-rtdb.firebaseio.com/meetups.json',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if(response.ok){
        history.replace('/');
      }
    })
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}
