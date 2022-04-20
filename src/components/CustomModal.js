import React from 'react'

export default function CustomModal(props) {
  return (
    <div className='overlay'>
        <div className="modal">
            {props.children}
        </div>
    </div>
  )
}
