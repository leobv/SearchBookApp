import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookshelf">Book Shelf</Link>
          </li>
          <li>
            <Link to="/search">Search Book</Link>
          </li>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;