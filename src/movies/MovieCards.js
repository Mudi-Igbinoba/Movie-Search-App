import React from 'react'
import { Card } from 'react-bootstrap'
import CardImage from '../img/Frame 3.svg'

const MovieCards = ({item}) => {
  return (
    <Card className='mx-2'>
        <Card.Img src={item.Poster} alt="card-image" />
        <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
            <Card.Text className='text-center'>{item.Title}</Card.Text>
        </Card.ImgOverlay>
    </Card>
  )
}

export default MovieCards