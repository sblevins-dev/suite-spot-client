import { DatePicker } from '@mui/x-date-pickers';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import dayjs from 'dayjs';

const SearchBar = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        destination: "Atlanta",
        checkIn: dayjs('2024-09-14'),
        checkOut: dayjs('2024-09-17'),
        guests: 1
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

    const handleClick = (e) => {
        // e.preventDefault();

        if (formData.destination !== ""
            && formData.checkIn !== null
            && formData.checkOut !== null
            && formData.guests !== null
            && formData.guests > 0
        ) {
            navigate("/search")
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
                <TextField
                    name="destination"
                    value={formData.destination}
                    label='Destination'
                    size='small'
                    required
                    sx={{
                        width: '210px',
                    }}
                    onChange={(e) => handleChange(e)}
                />
                <DatePicker
                    required={true}
                    sx={{
                        width: '210px'
                    }}
                    slotProps={{
                        textField: {
                            size: 'small',
                            label: 'Check-In',
                            name: "checkIn",
                            value: formData.checkIn
                        }
                    }}
                    onChange={handleCheckInChange}
                />
                <DatePicker
                    sx={{
                        width: '210px'
                    }}
                    slotProps={{
                        textField: {
                            size: 'small',
                            label: 'Check-Out',
                            name: "checkOut",
                            value: formData.checkOut
                        }
                    }}
                    onChange={handleCheckOutChange}
                />
                <TextField
                    type="number"
                    label="Guests"
                    name="guests"
                    value={formData.guests}
                    size='small'
                    required
                    sx={{
                        width: '210px'
                    }}
                    onChange={(e) => handleChange(e)}
                />
                <Box
                    sx={{
                        flexGrow: { xs: 12, sm: 1 },
                        width: { xs: "100%", lg: 'max-content' }
                    }}
                    onChange={(e) => handleChange(e)}
                >
                    <Button variant='contained' color="primary" type='submit' onClick={(e) => handleClick(e)}>
                        Search
                    </Button>
                </Box>

            </form>
        </Box>

    )
}

export default SearchBar