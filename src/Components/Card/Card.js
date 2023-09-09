import React from 'react'
import TextHeader from '../TextHeader/TextHeader'
import { data } from '../../Data/Data'

function Card() {

  return (
    <div className='card'>
      <img src={data.img} alt='images' />
      <TextHeader data={data} />
    </div>
  )
}

export default Card
