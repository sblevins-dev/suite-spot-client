import { Box, Typography } from "@mui/material"
import Lottie from "react-lottie"

const LottieCard = ({ options, title, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px',
        maxWidth: '400px',
        gap: 2
      }}
    >
      <Box
        sx={{
          height: '200px',
          width: '200px',
          overflow: 'hidden'
        }}
      >
        <Lottie
          options={options}
          height={200}
          width={200}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '120px',
          gap: 2
        }}
      >
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="body2" textAlign={"center"}>
          {description}
        </Typography>
      </Box>

    </Box>
  )
}

export default LottieCard