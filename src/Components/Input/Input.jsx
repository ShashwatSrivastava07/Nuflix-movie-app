import React from 'react'

const Input = ({type = 'text' , placeholder = 'Enter Here'}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 text-lg font-medium border-2 border-[#0071bb] bg-[#1a2a45] text-white focus:border-[#0445e7] focus:ring-0 focus:shadow-md transition-all"
        />
    )
}

export default Input