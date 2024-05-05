import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import hero from "./images/hero.jpg"

const SearchItemCard = () => {
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
        image={hero}
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
          <Typography variant="h5" component="div">
            Turtle Bay Resort
          </Typography>
          <Typography variant='subtitle1'>
            Spacious Rooms, Fitness Center
          </Typography>
          <Typography variant='subtitle1'>
            9.2 - Excellent 5979
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
            Turtle Bay Resort
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          >
            <Typography variant='body1'>
              $103
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