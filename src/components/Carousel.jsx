import { Container } from '@mui/material'
import CarouselCard from './CarouselCard';
import StaticHotelData from "../data/StaticData"

const Carousel = () => {

  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        marginY: '50px'
      }}
    >
      {StaticHotelData && StaticHotelData.map(hotel => (
        <CarouselCard key={hotel.id} hotel={hotel} />
      ))}
    </Container>
  )
}

export default Carousel