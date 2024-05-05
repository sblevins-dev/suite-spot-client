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
            p={3}
            borderRadius={10}
            textAlign={"center"}
            sx={{
                backdropFilter: 'blur(5px) saturate(100%)'
            }}
        >
            <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <TextField
                    hiddenLabel
                    variant="outlined"
                    placeholder='Destination'
                    size='small'
                />
                <DatePicker slotProps={{
                    textField: { size: 'small' }
                }}
                />
                <DatePicker slotProps={{
                    textField: { size: 'small' }
                }} />
                <TextField
                    hiddenLabel
                    type="number"
                    placeholder='Guests'
                    size='small' />
                <Button variant='contained' color="primary" type='submit' onClick={handleClick}>
                    Search
                </Button>
            </form>
        </Box>

    )
}

export default SearchBar