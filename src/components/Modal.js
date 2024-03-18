import React from 'react'

function Modal({open, onClose, children}) {
  return (
    //backdrop
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors
    ${open ? "visible bg-black/80" : "invisible"}`}>
        {/* modal */}
        <div
        onClick={(e) => e.stopPropagation()} 
        className={`bg-header rounded-xl shadow p-6 transition-all
        ${open ? "scale-100 opacity-100 px-5" : "scale-125 opacity-0"}`}>
            <button 
            onClick={onClose}
            className='absolute top-2 right-2 p-1 rounded-lg text-dark font-bold bg-header hover:text-gray-600'>
                close
            </button>
        {children}
        </div>
    </div>
  )
}

export default Modal