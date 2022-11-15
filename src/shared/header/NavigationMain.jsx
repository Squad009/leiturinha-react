import { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationMain extends Component {

    render() {

        return(
            <>
                <a href="/inicio.html" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="log-temp-projeto.png" className="bi me-2" width="50" height="40"
                            aria-label="LogoApp"></img>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                    <li><Link to="/leiturinhas" className="nav-link px-2 text-white">Leiturinhas</Link></li>
                    <li><Link to="/quizzes" className="nav-link px-2 text-white">Quizzes</Link></li>
                    <li><Link to="/sobre_projeto" className="nav-link px-2 text-white">Conheça a iniciativa</Link></li>.
                </ul>
            </>
        );
    }
}

export default NavigationMain;