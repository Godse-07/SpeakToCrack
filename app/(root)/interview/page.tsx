import React from 'react'
import Agent from '../../../components/Agent'

const page = () => {
  return (
    <>
        <h3>
            Interview Generation
        </h3>
        <Agent userName="you" userId="user1" type="generate"/>
    </>
  )
}

export default page