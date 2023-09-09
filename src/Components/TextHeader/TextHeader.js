import React from 'react'

function TextHeader({data}) {
    return (
        <div className='text-header'>
            <h3>{data.head}</h3>
            <h1>{data.name}</h1>
            <p>{data.paragraph}</p>
            <h2>{data.money}<span>$169.99</span></h2>
            <button>{data.svgBtn} Add to Card</button>
        </div>
    )
}

export default TextHeader
