import { Box, Typography } from "@mui/material"

const About = () => {
  return (
    <Box sx={{ padding: '16px', maxWidth: '800px', margin: 'auto'}}>
        <Typography variant='h4' component='h1' gutterBottom>
            About Us
        </Typography>
        <Typography variant='body1' gutterBottom>
            Welcome to our Book Store, your one-stop destination for a vast 
            collection of books across various genres.
        </Typography>
        <Typography variant='body1' gutterBottom>
            AWe believe that books have the power to educate, entertain, and
            inspire.
        </Typography>
        <Typography variant='body1' gutterBottom>
            Thank you for choosing our Book Store.
        </Typography>
    </Box>
  )
}

export default About