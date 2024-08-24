import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Book = ({book}) => {
    const { title, authors, first_publish_year } = book;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'
    }}>
        <img />
        <Typography variant='h6' component='h6' gutterBottom>
        {title}
        </Typography>
        <Typography variant='subtitle' gutterBottom>
        By {authors.map((author) => author.name).join(', ')}
        </Typography>
        <Typography variant='body1' gutterBottom>
        First Published: {first_publish_year}
        </Typography>
    </Box>
  )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book