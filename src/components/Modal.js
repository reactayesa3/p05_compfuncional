import React from 'react'

export default function Modal(props) {
  return (
    <div className='overlay'>
        <div className="modal">
            <p>{props.text}</p>
            <div className="modal-buttons">
                <button className='outline'
                        onClick={props.handleCancelAction}>
                            Cancelar
                </button>
                <button onClick={props.handleConfirmAction}>
                    Aceptar
                </button>
            </div>
        </div>
    </div>
  )
}
