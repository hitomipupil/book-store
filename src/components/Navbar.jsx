import { NavLink } from "react-router-dom"
import { Box, Button, Toolbar, AppBar } from "@mui/material"

const Navbar = () => {
  return (
  <AppBar position="static">
    <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
            <Button sx={{ color: 'white' }} component={NavLink} to="/">
                Home
            </Button>
            <Button sx={{ color: 'white' }} component={NavLink} to="/categories">
                Categories
            </Button>
            <Button sx={{ color: 'white' }} component={NavLink} to="/about">
                About
            </Button>
            
        </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar