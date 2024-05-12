import { DatePicker } from '@mui/x-date-pickers';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/search")
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
            <form style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <TextField
                    label='Destination'
                    size='small'
                    sx={{
                        width: '210px',
                    }}
                />
                <DatePicker
                    sx={{
                        width: '210px'
                    }}
                    slotProps={{
                        textField: { size: 'small', label: 'Check-In' }
                    }}
                />
                <DatePicker
                    sx={{
                        width: '210px'
                    }}
                    slotProps={{
                        textField: { size: 'small', label: 'Check-Out' }
                    }} />
                <TextField
                    type="number"
                    label="Guests"
                    size='small'
                    sx={{
                        width: '210px'
                    }}
                />
                <Box
                    sx={{
                        flexGrow: { xs: 12, sm: 1 },
                        width: { xs: "100%", lg: 'max-content' }
                    }}
                >
                    <Button variant='contained' color="primary" type='submit' onClick={handleClick}>
                        Search
                    </Button>
                </Box>

            </form>
        </Box>

    )
}

export default SearchBar