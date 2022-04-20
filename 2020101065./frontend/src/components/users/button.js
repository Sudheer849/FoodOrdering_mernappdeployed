import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Whatever = () => {
  const navigate = useNavigate();

  return (
   <Button color="success"
   onClick={ () =>
    navigate("/button/hello")
   }>
     Hello
   </Button>
  );
};

export default Whatever;