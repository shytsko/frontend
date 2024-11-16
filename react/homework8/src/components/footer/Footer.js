import Copyright from "./Copyright";
import NavSocials from "./NavSocials";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap container">
                <Copyright />
                <NavSocials />
            </div>
        </footer>
    );
}

export default Footer;