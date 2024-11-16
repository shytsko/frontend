import NavLeft from './NavLeft';
import NavRight from './NavRight';


function Header() {
    return (
        <header className="header">
            <div className="header__wrap container">
                <NavLeft />
                <NavRight />
            </div>
        </header>

    );
}

export default Header;