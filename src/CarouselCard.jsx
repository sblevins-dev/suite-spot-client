import { CardActionArea, Typography, Card, CardContent, CardMedia } from '@mui/material';
import hero from "./images/hero.jpg"

const CarouselCard = ({room}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={room.photos[0]}
                    alt="hero"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {room.hotelName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CarouselCard