import { Container, Typography } from '@mui/material'

import { useContext } from 'react';
import { Context } from '../context/Context';
import CarouselCard from './CarouselCard';

const Carousel = () => {

  const { roomList } = useContext(Context);

  let list = roomList.slice(0, 4);

  return (
    <Container sx={{display: 'flex', gap: 3, marginY: '50px'}}>
        {list && list.map(room => (
            <CarouselCard key={room.id} room={room} />
        ))}
    </Container>
  )
}

export default Carousel