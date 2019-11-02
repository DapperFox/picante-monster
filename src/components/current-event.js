import React from "react"

export default function CurrentEvent({ info }) {
  if (!info) return (<div></div>)

  console.log(info.event)
  return (
    <section>
      <h1>Selected Event: {info.event.title}</h1>
      <h2>Description: {info.event.extendedProps.description}</h2>
      <p>
        Address:
        <a href={`https://maps.google.com/?q=${info.event.extendedProps.address}`}>
          {info.event.extendedProps.address}
        </a>
      </p>
    </section>
  )
}
