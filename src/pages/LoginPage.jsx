import { useState } from "react";
import homeLogin from "../images/signIn.png";
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { OutlinedInput } from "@mui/material";
import { Button } from "react-bootstrap";

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    // const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="row overflow-hidden">
            <div className="col-md-6">
                <img src={homeLogin} alt="signIn" width="80%" height="80%" />
            </div>
            <div className="col-md-6 p-5">
                <h4 className="mb-2">Login</h4>
                <form className=" px-lg-5">
                    <TextField fullWidth size="large" type="email" placeholder="Enter Email ID" className="mb-3" />
                    <FormControl fullWidth size="large" className="mb-3 ">

                        <OutlinedInput
                            placeholder="Enter Password"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>

                    <Button variant="conained" className="mb-3" style={{ backgroundColor: "#F0A76F", color: "white", width: '100%' }} >Sign In</Button>
                    <a href="" className="d-block" style={{ textDecoration: "none", color: "#BDBDBD" }} >Forget Password</a>
                    <div className="d-flex justify-content-center align-items-center my-4 gap-2">
                        <div style={{ borderTop: "1px solid rgb(165, 161, 161)", width: "45%" }}></div>
                        <div style={{ color: "#6032C1", fontWeight: "bold", textWrap: "nowrap" }}>or login with</div>
                        <div style={{ borderTop: "1px solid rgb(165, 161, 161)", width: "45%" }}></div>
                    </div>

                    <div className="d-flex justify-content-center gap-2">
                        <p style={{ color: "#6032C1", display: "inline" }}>Not an Member</p>
                        <a style={{ color: "#F0A76F", display: "inline", textDecoration: "none" }} href="/SignUp">Sign Up</a>

                    </div>
                </form>

            </div>
            <div class="searates-planner">
                <iframe src="https://www.searates.com/route-planner/frame?url=http://domain.com/route"
                    width="100%" height="700" frameborder="0"
                    align="middle" scrolling="No">
                </iframe>
            </div>
            <div class="searates-planner">
                <iframe src="https://www.searates.com/route-planner/viewer-frame?sid=<?php echo $_GET['sid'] ?>"
                    width="100%" height="700" frameborder="0"
                    align="middle" scrolling="No">
                </iframe>
            </div>
            <iframe id="packer" src="https://packer.searates.com/services/online/stuffing/?lang=en&background_color=ffffff&border_color=ffffff"
                width="750" height="700" scrolling="No" align="center" frameborder="0">
            </iframe>
        </div>
    )
};

export default LoginPage;