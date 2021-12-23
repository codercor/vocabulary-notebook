import { TextField, Button, Typography, Grid } from "@mui/material";

import './Login.css'
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <Grid sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            height: "70vh",
        }}
            gap={1}
            container>
            <Grid item sx={
                {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }
            } md={6.5} xs={12}>
                <Typography variant="h4" gutterBottom component="div"> Login To <b>VN</b> </Typography>
            </Grid>
            <Grid item md={6.5} xs={12}>
                <TextField fullWidth size="small" label="Username" variant="outlined" />
            </Grid>

            <Grid item md={6.5} xs={12}>
                <TextField fullWidth size="small" type="password" label="Password" variant="outlined" />
            </Grid>
            <Grid item md={6.5} xs={12}>
                <Button component={Link} to="/application" variant="contained" color="success" fullWidth >Login</Button>
            </Grid>


        </Grid >
    )
}
export default Login;
