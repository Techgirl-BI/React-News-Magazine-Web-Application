import { Fragment } from "react";
const FakeText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni suscipit quisquam tempora cupiditate illum repudiandae, quis minima labore, fugiat delectus vitae adipisci eos qui, aliquid sit facere! Doloremque, perferendis optio?" 
import React from 'react'

function ContactUsPage() {
  return (
    <Fragment>
        <h1>Contact</h1>
        <p>{FakeText}</p>
    </Fragment>
  )
}

export default ContactUsPage