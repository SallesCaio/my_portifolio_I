import AppBar from "@mui/material/AppBar"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/material/styles"


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    color: "primary.contrastText",
    height: "80px",
    top: 0,
})

const NavBar = () => {

  return (
    <>
        <AppBar position="absolute">
            <StyledToolbar>                
            <MenuItem>Sobre Mim</MenuItem>
            <MenuItem>Educação</MenuItem>
            <MenuItem>Projetos</MenuItem>
            </StyledToolbar>
        </AppBar>
    </>
  )
}

export default NavBar
