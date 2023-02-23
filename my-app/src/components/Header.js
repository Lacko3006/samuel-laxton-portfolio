import * as React from "react";
import Image from "../images/LinkedIn_logo_initials.png.webp"

const styles = {
    card: {
      // alignItems: "center",
      background: "#63C6DE",
      // padding: "10px"
      // justifyContent
    },
    mobile: {
      fontSize: "20px",
    }
}

export default function Header() {
  return <div className="d-flex flex-row justify-content-between align-items-center" style={styles.card}>
    <h1>Sam Laxton</h1>
    <h4 className="" style={styles.mobile} >Mobile: 07584098704</h4>
    <a href="https://www.linkedin.com/in/samuel-laxton-ab10857b/" target="_blank" rel="noreferrer">
    <img src={Image} alt="LinkedIn Logo"></img>
    </a>
    </div>
}
