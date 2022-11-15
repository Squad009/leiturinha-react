import Authentication from './header/Authentication';
import SearchMain from './header/SearchMain';
import NavigationMain from './header/NavigationMain';


function HeaderApp({setRegisterButton}) {

    return(
        <header className="p-2 text-white">
            <div className="container">
                <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavigationMain />

                    <SearchMain />

                    <Authentication setRegisterButton={setRegisterButton} />
                    
                    {/* {this.props.navigationMain}

                    {this.props.searchMain}

                    {this.props.authentication} */}
                </nav>
            </div>
        </header>

    )
}

export default HeaderApp;