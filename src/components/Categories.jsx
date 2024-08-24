import { NavLink, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography } from "@mui/material";

const categoriesData = ['fiction', 'fantasy', 'horror', 'romance', 'computers'];

const Categories = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2}>
            {categoriesData.map((category) => (
              <Grid item key={category}>
                <NavLink
                  to={`/categories/${category}`}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    padding: '8px',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s',
                  }}
                  
                >
                  <Typography variant="h6">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                </NavLink>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Categories;
