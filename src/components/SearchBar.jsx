import { DatePicker } from '@mui/x-date-pickers';
import { TextField, Button, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { _get } from '../axios/api';
import dayjs from 'dayjs';

const MyTextField = styled(TextField)({
    width: '210px',
    color: 'red',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            // borderColor: 'darkblue',// border color
            color: 'red',

        },
        '&:hover fieldset': {
            borderColor: 'darkorange', // hover border color
        },
        '&.Mui-focused fieldset': {
            borderColor: 'darkblue', // focused border color
            color: 'darkblue'
        },
    },
    '& .MuiInputBase-input': {
        backgroundColor: 'white',
        borderRadius: '5px',
    },
})

const SearchBar = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        destination: "Atlanta",
        checkIn: dayjs('2024-09-14'),
        checkOut: dayjs('2024-09-17'),
        guests: 1,
        roomNum: 1
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const handleCheckInChange = (date) => {
        setFormData({
            ...formData,
            checkIn: date,
        })
    }

    const handleCheckOutChange = (date) => {
        setFormData({
            ...formData,
            checkOut: date,
        })
    }

    const getHotelData = async () => {
        const { destination, checkIn, checkOut, guests, roomNum } = formData;
        try {
            const locId = await _get('/v1/hotels/locations', {
                params: {
                    name: destination,
                    locale: 'en-us',
                    currency: 'USD'
                }
            })

            const hotelData = await _get('/v1/hotels/search', {
                params: {
                    dest_id: locId.data[0].dest_id,
                    checkin_date: checkIn.format('YYYY-MM-DD'),
                    checkout_date: checkOut.format('YYYY-MM-DD'),
                    adults_number: guests,
                    room_number: roomNum,
                    dest_type: "city",
                    order_by: "popularity",
                    filter_by_currency: "USD",
                    locale: "en-us",
                    units: "imperial"
                }
            })

            return hotelData.data.result;
        } catch (e) {
            console.log(e)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();

        if (formData.destination !== ""
            && formData.checkIn !== null
            && formData.checkOut !== null
            && formData.guests !== null
            && formData.guests > 0
        ) {
            const data = await getHotelData();
            navigate("/search", {
                state: {
                    data: data
                }
            })
        }

    }

    return (
        <Box
            zIndex={2}
            bgcolor={'rgba(255, 255, 255, 0.9)'}
            borderRadius={1}
            py={2}
            px={2}
            textAlign={"center"}
            sx={{
                backdropFilter: 'blur(5px) saturate(100%)',
                marginX: 6
            }}
        >
            <form
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                }}
            >
                <MyTextField
                    name="destination"
                    value={formData.destination}
                    label='Destination'
                    size='small'
                    required
                    onChange={(e) => handleChange(e)}
                    InputLabelProps={{
                        style: {
                            color: 'darkblue',
                            fontWeight: '500'
                        }, // Change label color here
                    }}
                />
                <DatePicker
                    required={true}
                    sx={{
                        width: '210px',
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                // borderColor: 'darkblue',
                            },
                            '&:hover fieldset': {
                                borderColor: 'darkorange',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'darkblue',
                            },
                        },
                    }}
                    slotProps={{
                        textField: {
                            size: 'small',
                            label: 'Check-In',
                            name: "checkIn",
                            value: formData.checkIn,
                            backgroundColor: 'white',
                            InputLabelProps: {
                                style: {
                                    color: 'darkblue',
                                    fontWeight: '500',
                                },
                            }
                        }
                    }}
                    onChange={handleCheckInChange}
                />
                <DatePicker
                    sx={{
                        width: '210px',
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                // borderColor: 'darkblue',
                            },
                            '&:hover fieldset': {
                                borderColor: 'darkorange',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'darkblue',
                            },
                        },
                    }}
                    slotProps={{
                        textField: {
                            size: 'small',
                            label: 'Check-Out',
                            name: "checkOut",
                            value: formData.checkOut,
                            backgroundColor: 'white',
                            InputLabelProps: {
                                style: {
                                    color: 'darkblue',
                                    fontWeight: '500',
                                },
                            }
                        }
                    }}

                    onChange={handleCheckOutChange}
                />
                <MyTextField
                    type="number"
                    label="Guests"
                    name="guests"
                    value={formData.guests}
                    size='small'
                    required
                    onChange={(e) => handleChange(e)}
                    InputLabelProps={{
                        style: {
                            color: 'darkblue',
                            fontWeight: '500'
                        }, // Change label color here
                    }}
                />
                <Box
                    sx={{
                        flexGrow: { xs: 12, sm: 1 },
                        width: { xs: "100%", lg: 'max-content' }
                    }}
                    onChange={(e) => handleChange(e)}
                >
                    <Button
                        variant='contained'
                        color="primary"
                        type='submit'
                        onClick={(e) => handleClick(e)}
                        sx={{
                            maxWidth: '200px',
                            alignSelf: 'center',
                            transition: 'all 0.3s ease-in-out',
                            borderRadius: '20px',
                            paddingX: '30px',
                            '&:hover': {
                                backgroundColor: 'orange'
                            }

                        }}
                    >
                        Search
                    </Button>
                </Box>

            </form>
        </Box>

    )
}

export default SearchBar