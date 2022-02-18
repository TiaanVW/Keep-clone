import React from "react";

function Footer() {
    const d = new Date();
    const year = d.getYear()  + 1900;

    console.log(year);
    return (<footer>
                <p>Copyright {year}</p>
            </footer>);
}

export default Footer;