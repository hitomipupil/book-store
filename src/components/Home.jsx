import { Box, Typography } from "@mui/material"

const Home = () => {
  return (
    <Box >
        <Typography variant='h3' component='h1' gutterBottom>
            Welcome to the Book Store
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
            Your one-stop destination for all your reading needs
        </Typography>
        <Typography variant='body1' gutterBottom>
            At our Book Store, we offer a vast collection of books across 
            various genres to cater to the tastes of every reader.
        </Typography>
        <Typography variant='body1' gutterBottom>
            Our mission is to promote the joy of reading by providing access 
            to a diverse selection of books.
        </Typography>
        <Typography variant='body1' gutterBottom>
            Explore our extensive collection, discover new favorites, and 
            immerse yourself in the world of books.
        </Typography>
    </Box>
  )
}

export default Home