import { Box } from "@mui/material"
import rating from "../lotties/hotelRating.json"
import hotel from "../lotties/hotel.json"
import people from "../lotties/people.json"
import LottieCard from "./LottieCard"

const Featured = () => {
    const ratingOptions = {
        loop: true,
        autoplay: true,
        mode: 'scroll',
        animationData: rating,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const hotelOptions = {
        loop: true,
        autoplay: true,
        animationData: hotel,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const peopleOptions = {
        loop: true,
        autoplay: true,
        animationData: people,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Box
            p={2}
            sx={{
                backgroundColor: 'white',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}
        >
            <LottieCard options={hotelOptions} title={"Comfort Stay"}
                description={
                    "Book your stay at our family-friendly hotel with spacious accommodations and convenient access to local attractions."
                }
            />
            <LottieCard options={peopleOptions} title={"Explore Ease"}
                description={
                    "Plan your next family adventure with ease using our website's intuitive search filters for family-friendly accommodations."
                }
            />
            <LottieCard options={ratingOptions} title={"Top Rated"}
                description={
                    "Explore our top-rated hotels, known for exceptional service and luxurious amenities."
                }
            />
        </Box>
    )
}

export default Featured