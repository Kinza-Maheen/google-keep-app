import React from "react";

const Footer=()=>{

    const year = new Date().getFullYear();

    return(
        <>
        <footer className="footer">
            <p className="copyright">copyright © {year}</p>
        </footer>
        
        </>
    )
}

export default Footer;