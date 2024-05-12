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
            px={2}
            py={1}
            borderRadius={1}
            textAlign={"center"}
            sx={{
                backdropFilter: 'blur(5px) saturate(100%)'
            }}
        >
            <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <TextField
                    variant="outlined"
                    label='Destination'
                    size='small'
                />
                <DatePicker slotProps={{
                    textField: { size: 'small', label: 'Check-In' }
                }}
                />
                <DatePicker slotProps={{
                    textField: { size: 'small', label: 'Check-Out' }
                }} />
                <TextField
                    type="number"
                    label="Guests"
                    size='small' />
                <Button variant='contained' color="primary" type='submit' onClick={handleClick}>
                    Search
                </Button>
            </form>
        </Box>

    )
}

export default SearchBar