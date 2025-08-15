import { styled }     from "@mui/material/styles";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton : React.FC<StyledButtonProps> = ({ children, onClick}) => {

    const StyledButton = styled("button")(({ theme })=>({
        backgroundColor: "transparent",
        border: "2px solid ${theme.palette.secondary.contrastText}",
        color: theme.palette.primary.contrastText,
        padding: "5px 15px",
        widht: "100%",
        borderRadius: "3px",
        cursor: "pointer",
        fontSize: "16px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",

        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.contrastText,
        }
    }))
    
  return (
    
    <>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton
