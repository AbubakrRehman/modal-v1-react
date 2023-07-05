import React from 'react'

function Modal({ title, content, onClose, show, closeButtonText }) {
    return (
        show && (<div className='modal' onClick={onClose}>
            <div className='main' onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>
                <p className='modal__content'>{content} </p>
                <button className="btn" onClick={onClose} type="button">{closeButtonText}</button>
            </div>

        </div>)

    )

}

export default Modal