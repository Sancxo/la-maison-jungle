import logo from '../assets/logo.png';
import "../styles/Banner.css"
const Banner = ({darkMode, setDarkMode}) => {

    return(
        <header className="lmj-banner">
            <div className="darkmode-switch-ctn">
                <input type="checkbox" id="darkmode-switch" checked={JSON.parse(darkMode)} onChange={() => setDarkMode(!darkMode)} />
                <label htmlFor="darkmode-switch">Mode sombre</label>
            </div>
            <div className="logo-ctn">
                <img src={logo} alt="La maison jungle" className="lmj-logo" />
                <h1 className="lmj-title">La maison jungle</h1>
            </div>
        </header>
    )
}

export default Banner;