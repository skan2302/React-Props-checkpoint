import React from 'react'

export default function ProfileComponent(props) {
    return (
        <div>
        {props.children}
        <h1>{props.profile.fullname}</h1>
         <h2>{props.profile.bio}</h2>
         <p>{props.profile.profession}</p>
          </div>
    )
}
