import React from 'react'

const Button = ({ text }) => {
    return (
        <button className="px-6 py-3 bg-gradient-to-r from-[#0445e7] to-[#3170ee] text-white font-semibold shadow-md hover:opacity-90 active:scale-90 transition-transform transition-opacity">
            {text}
        </button>

    )
}

export default Button