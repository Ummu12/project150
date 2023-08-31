import React, {useState}from "react";
import { Card,CardContent,Grid,Button} from "@mui/material";
function App() {
  const [clr, setClr]=useState("#000000");
  return (
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Card sx={{
            bgcolor:clr,
           color:"white",
            fontSize:25,
            textAlign:"center"
            }}>

             <CardContent>
                {clr}
             </CardContent>
          </Card>
        </Grid>
          <Grid item xs={3}>
               <Button onClick={()=> setClr("red")} fullWidth variant="contained" color="error">
                Red</Button>
          </Grid>

          <Grid item xs={3}>
               <Button onClick={()=>setClr("green")}  fullWidth variant="contained" color="success">
                Green</Button>
          </Grid>

      <Grid item xs={3}>
      <Button onClick={()=>setClr("blue")} fullWidth variant="contained" color="primary">
        Blue
      </Button>
      </Grid>



      <Grid item xs={3}>
        <Button onClick={()=>setClr("yellow")} fullWidth  variant="contained" color="warning">
          Yellow
        </Button>

      </Grid>

   


      </Grid>
  );
}

export default App;
