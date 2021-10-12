import { useState } from "react";
import '../styles/Footer.css';

const Footer = () => {
    let [email, setEmail] = useState("your-name@email.com");
    
    const handleChange = e => {
        setEmail(e.target.value);
    }
    const checkEmail = () => {
        email &&
        (email.includes("@") || alert("Votre email n'est pas au bon format !"));
    }
    
    return(
        <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
                type='email'
				onChange={handleChange}
				placeholder={email}
				onBlur={checkEmail}
			/>
		</footer>
    )
}

export default Footer;