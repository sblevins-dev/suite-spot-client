import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

const SearchItemCard = ({ room }) => {
  console.log(room)

  const handleClick = () => {
    window.open(room.url, '_blank')
  }

  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        // flexDirection: {sm: 'column'},
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: {xs: "100%", lg: '200px'},
        borderRadius: '3px'
      }}
    >
      <CardMedia
        component={"img"}
        image={room.max_photo_url}
        alt=""
        flexGrow={1}
        sx={{ 
          width: {xs: "100%", md: '300px'}
        }}
      />
      <Box flexGrow={2} height={"100%"} maxHeight={"100%"}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            maxHeight: '100%',
            maxWidth: '400px'
          }}
        >
          <Typography variant="subtitle2">
            {room.accommodation_type_name}
          </Typography>
          <Box>
            <Typography variant="h6" component="div">
            {room.hotel_name}
          </Typography>
          <Typography variant='subtitle2'>
            {room.city}
          </Typography>
          </Box>
          
          <Box 
            sx={{
              display: 'flex',
              gap: 1
            }}
          >
            {/* {room.amenities && room.amenities.map(a => (
              <Typography variant='overline'
                sx={{ fontWeight: 'bold' }}
              >
                {a}
              </Typography>
            ))} */}
          </Box>
          
          <Typography variant='subtitle2'>
            {room.review_score} 
            {/* - {`(${room.ratingAmount})`} */}
          </Typography>
        </CardContent>
      </Box>
      <Box flexGrow={1} p={2}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          maxWidth: '400px',
          minWidth: { xs: '100%', sm:'400px' }
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'max-content',
            gap: 3,
            backgroundColor: '#e5ffea',
            borderRadius: '5px',
            minWidth: '100%'
          }}
        >
          <Typography variant="subtitle1">
            {room.hotel_name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          >
            <Typography variant='subtitle2'>
              ${room.min_total_price}
            </Typography>
            <Button variant='contained' onClick={handleClick}>
              View Deal
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default SearchItemCard