import React from 'react'

const Values = ({name,email,key}) => {
  return (
    <div>
        <div className='field'>
          <h2 className='text'>{name}</h2>
          <h2 className='text'>{email}</h2>
        </div>
    </div>
  )
}

export default Values
