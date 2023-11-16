import React from 'react'

const GetStartedCard = ({ item }) => {
  return (
    <section className='step-card'>
      <div className='step-heading'>
        <h2>{item.id}</h2>
        <h4>{item.heading}</h4>
      </div>
      <p>{item.text}</p>
    </section>
  )
}

export default GetStartedCard
