import { useEffect,useState } from "react";
import { db } from "../utils/baseDatos.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import CartList from "./CartList.jsx";
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
const CartListConteiner = () => {
    const [resultDatos, setResultDatos] = useState([])
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
    const { idSearch } = useParams();
    const [busqueda, setbusqueda] = useState('')

      useEffect(() => {
        const fechbaseDatos = async() => {
            let catalogo;
            if (idCategory){
                catalogo = query(collection(db, "productos"), where('categoria', "==", idCategory))

            }else{
                catalogo = collection(db, "productos")
            }
        const querySnapshop = await getDocs(catalogo);
        const dataSnapshop = querySnapshop.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        return dataSnapshop;
    }
    fechbaseDatos()
    .then(result => {setDatos(result)
                     setResultDatos(result)})
    .catch(err => console.log(err))
    }, [idCategory]);
    
    const handlerChange = e =>{
    setbusqueda(e.target.value)
    }
    /*const prueba = (e) => {
        if(e.keyCode == 13){
            console.log(busqueda)
        }
    }*/
 
    const findC = (event) => {
        if(event.keyCode == 13){  
            console.log(datos)
        const categorias = datos.filter((el) => el.info.toUpperCase().includes(busqueda.toUpperCase()) || el.description.toUpperCase().includes(busqueda.toUpperCase()) || el.nombre.toUpperCase().includes(busqueda.toUpperCase()))
            if(categorias.length != 0){
                console.log(categorias)
                setResultDatos(categorias)
            }else if(categorias.length == 0){
                console.log(categorias)
                setResultDatos(datos)
            }
    }
    }
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
              className="search"
              value={busqueda}
              onChange={handlerChange}
              onKeyDown={findC}
            />
            </Search>
            </div>
        <CartList items={resultDatos}/>
        </section>
    );
}
export default CartListConteiner;