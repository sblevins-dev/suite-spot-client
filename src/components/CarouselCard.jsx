import { CardActionArea, Typography, Card, CardContent, CardMedia, Divider } from '@mui/material';

const CarouselCard = ({ hotel }) => {

    const handleClick = () => {
        window.open(hotel.bookingLink, '_blank');
    }

    return (
        <Card
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 345,
                minHeight: '350px',
                height: '100%'
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    image={hotel.image}
                    alt={hotel.name}
                    sx={{
                        maxHeight: '200px'
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                        minHeight: "220px",
                        height: "100%"
                    }}
                >
                    <Typography variant="h5" fontWeight={400} textAlign={'center'} pt={1} >
                        {hotel.name}
                    </Typography>
                    <Divider variant='middle' />
                    <Typography variant="body2" color="text.secondary" minHeight={'100px'}>
                        {hotel.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CarouselCard