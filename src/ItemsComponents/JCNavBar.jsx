import { AiFillPhone } from "react-icons/ai";
import { FcAssistant } from "react-icons/fc"
import { FcShop } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai"
import CardWidget from '../ItemsComponents/TrolleyIcon' 
import { SlList } from "react-icons/sl"
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im"
import * as React from 'react';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
const pages = ['Vinos', 'Aperitivos', 'Contactos'];

const ButtonAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBar">
          <div className="d-flex align-items-center">
            <Link to='/'><img className="navBar-img" src="https://res.cloudinary.com/dees2z2uf/image/upload/v1686358638/bodega-icono_c6wczl.png" alt="" /></Link>
            <Link to='/'><h3>Bodega NY</h3></Link>
          </div>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent:"end"  } }}>
          <div className="d-flex align-items-center">
              <h2 className="navBar-icons"><Link to="/trolley"><AiOutlineUser/></Link></h2>
              <Link to="/trolley"><CardWidget/></Link>
              </div>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <ImMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <div key={page} onClick={handleCloseNavMenu}>
                  <Button><Link to={`/categoria/${page}`}>{page}</Link></Button>
                </div>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:"space-around",alignItems:"center" } }}>
            {pages.map((page) => (
              <h5 className="navBar-size"
              key={page}
              onClick={handleCloseNavMenu}
              >
                <Link to={`/categoria/${page}`}>{page}</Link>
              </h5>
            ))}
              <div className="d-flex align-items-center">
              <h2 className="navBar-icons"><Link to="/trolley"><AiOutlineUser/></Link></h2>
             <Link to="/trolley"><CardWidget/></Link>
              </div>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;
/*
const JCNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid navBar">
    <div className="d-flex align-items-center">
    <Link to='/'><img className="navBar-img" src="/src/assets/bodega-icono.png" alt="" /></Link>
    <Link to='/'><h1>Bodega NY</h1></Link>
    </div>
    <div className="d-flex col-6 justify-content-end align-items-center">
    <div className="collapse navbar-collapse col-6" id="navbarSupportedContent">
      <ul className="navbar-nav navBar-content justify-content-around align-items-center">
        <h5 className="nav-item">
        <Link to="/categoria/Vinos">Vinos</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/categoria/Tonicos">Aperitivos</Link>
        </h5>
        <h5 className="nav-item">
          <a className="nav-link" href="#">Colección</a>
        </h5>
        <h5 className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contactanos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Pedido <AiFillPhone/></a></li>
            <li><a className="dropdown-item" href="#">Soporte <FcAssistant/></a></li>
            <li><a className="dropdown-item" href="#">Puestos <FcShop/> </a></li>
          </ul>
        </h5>
      </ul>
    </div>
    <h2 className="nav-item d-flex">
          <a className="nav-link_icons" href="#"><AiOutlineUser/></a>
          <Link to="/trolley"><FiShoppingCart/></Link>
    </h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><SlList/></span>
    </button>
  </div>
  </div>
  </nav>
  );
}

export default JCNavBar;*/