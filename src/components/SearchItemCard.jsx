import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const SearchItemCard = ({ room }) => {
  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '200px',
        borderRadius: '3px'
      }}
    >
      <CardMedia
        component={"img"}
        image={room.photos[0]}
        alt=""
        flexGrow={1}
        sx={{ width: '300px' }}
      />
      <Box flexGrow={2}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '100%'
          }}
        >
          <Typography variant="subtitle2">
            {room.type}
          </Typography>
          <Typography variant="h4" component="div">
            {room.hotelName}
          </Typography>
          <Box 
            sx={{
              display: 'flex',
              gap: 1
            }}
          >
            {room.amenities && room.amenities.map(a => (
              <Typography variant='overline'
                sx={{ fontWeight: 'bold' }}
              >
                {a}
              </Typography>
            ))}
          </Box>
          <Typography variant='subtitle2'>
            {room.rating} - {`(${room.ratingAmount})`}
          </Typography>
        </CardContent>
      </Box>
      <Box flexGrow={1} p={2}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'max-content',
            gap: 3,
            backgroundColor: '#e5ffea',
            borderRadius: '5px',

          }}
        >
          <Typography variant="body2">
            {room.hotelName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          >
            <Typography variant='body1'>
              ${room.pricePerNight}
            </Typography>
            <Button variant='contained'>
              View Deal
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default SearchItemCard