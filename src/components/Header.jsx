import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <Box component="header" sx={{ p: 2, bgcolor: 'primary.main', color: 'white'}}>
        <Typography variant='h4' align='center'>{title}</Typography>
    </Box>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header