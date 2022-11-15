
function HeaderApp(props) {

    return(
        <header className="p-2 text-white">
            <div className="container">
                <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                   {/*  <NavigationMain />

                    <SearchMain />

                    <Authentication setRegisterButton={setRegisterButton} /> */}
                    
                    {props.navigationMain}

                    {props.searchMain}

                    {props.authentication} 
                </nav>
            </div>
        </header>

    )
}

export default HeaderApp;