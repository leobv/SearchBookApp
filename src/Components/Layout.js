import { Outlet, Link } from "react-router-dom";
import SearchAppBar from "./NavBar";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Layout = () => {
  return (
    <>
      <nav>
          <SearchAppBar/>
            <ButtonGroup variant="contained" aria-label="text button group">
                <Button><Link to="/">Home</Link></Button>  
                <Button><Link to="/bookshelf">Book Shelf</Link></Button>
                <Button><Link to="/search">Search Book</Link></Button>
          </ButtonGroup>
          
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;