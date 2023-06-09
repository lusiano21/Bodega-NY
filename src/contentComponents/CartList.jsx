import Cart from "../ItemsComponents/Cart.jsx";
import Animations from "../ItemsComponents/Animations.jsx";
import {styled, alpha } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { BiSearch } from "react-icons/bi";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.55),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.75),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '50vw',
        '&:focus': {
          width: '60vw',
        },
      },
    },
  }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const CartList = ({ items }) => {
    return (
        <section>
            <div className="box-search">
            <Search>
            <SearchIconWrapper>
              <BiSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
            </div>
        <article className="d-flex flex-wrap justify-content-center ">
            
            {
                items.length > 0
                    ? items.map(item =>
                            <Cart
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                nombre={item.nombre}
                                rate={item.rate}
                                precio={item.precio} />

                        )
                    : <Animations />
            }
        </article>
        </section>
    );
}
export default CartList;