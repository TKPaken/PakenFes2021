import React from "react";
import "./Footer.css";
import {Divider} from "@mui/material";

function Footer(): JSX.Element {
    return (
        <footer>
            <Divider/>
            <div className="footer-content">
                Copyright &copy; 2021 Tsukukoma Paken.
            </div>
        </footer>
    );
}

export default Footer;