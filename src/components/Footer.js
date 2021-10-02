import { useState } from "react";

const Footer = () => {
    let [email, setEmail] = useState("your-name@email.com");
    
    const handleChange = e => {
        setEmail(e.target.value);
    }
    const checkEmail = () => {
        email.includes("@") || alert("Votre email n'est pas au bon format !");
    }
    
    return(
        <form>
            <input type="email" onChange={handleChange} onBlur={checkEmail}></input>
        </form>
    )
}

export default Footer;